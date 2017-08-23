import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
//Todo:: look into google places api autocomplete to use instead of typeahead
//https://developers.google.com/maps/documentation/javascript/places?csw=1#places_autocomplete
import {
    Http,
    Response,
    RequestOptions,
    URLSearchParams } from '@angular/http';
import { BootstrapParams } from '../../../../bootstrap-params';

@Component({
    selector: 'app-geo-locator',
    templateUrl: './geo-locator.component.html'
})
export class GeoLocatorComponent implements OnInit {
    @Input() geolocation: number[];
    @Output() geolocationChange = new EventEmitter<number[]>();
    public dataSource: Observable<any>;
    public typeaheadLoading: boolean;
    public typeaheadNoResults: boolean;
    public selectedLocation: string;
    public placeHolderText: string;

    private url = 'https://maps.googleapis.com/maps/api/geocode/json';

    public constructor(private http: Http, private bootstrapParams: BootstrapParams, private translate: TranslateService) {
        this.dataSource = Observable
            .create((observer: any) => {
                observer.next(this.selectedLocation);
            })
            .mergeMap((token: string) => this.getLocation(token));
    }

    public searchAndSelect(token: string): void {
        this.getLocation(token).subscribe((locResults) => {
            if (locResults.length) {
                this.geolocation = [locResults[0].geometry.location.lat, locResults[0].geometry.location.lng];
                this.selectedLocation = locResults[0].formatted_address;
            }
            else {
                this.typeaheadNoResults = true;
                this.geolocation = null;
            }
            this.geolocationChange.emit(this.geolocation);
        });
    }

    public typeaheadOnSelect(e: TypeaheadMatch): void {
      this.geolocation = [e.item.geometry.location.lat, e.item.geometry.location.lng];
      this.geolocationChange.emit(this.geolocation);
    }

    public changeTypeaheadLoading(e: boolean): void {
        this.typeaheadLoading = e;
    }

    public changeTypeaheadNoResults(e: boolean): void {
        this.typeaheadNoResults = e;
    }

    public getLocation(token: string): Observable<any> {
        let queryParams: URLSearchParams = new URLSearchParams();
        queryParams.set('v', '3.exp');
        queryParams.set('key', this.bootstrapParams.googleMapKey);
        queryParams.set('address', token);
        const options: RequestOptions = new RequestOptions({ params: queryParams });
        return this.http.get(this.url, options)
                .map((res: Response) => {
                    const body = res.json();
                    if (body) {
                      return body.results;
                    }
                    return null;
                });
    }

    ngOnInit() {
        this.translate.get('SHARED.GEOLOCATION.SEARCH_PLACEHOLDER').subscribe((res: string) => {
            this.placeHolderText = res;
        });
    }
}
