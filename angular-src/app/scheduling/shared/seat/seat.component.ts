import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { SchedulingApiService } from '../scheduling-api.service';
import { SelectedExamDetailService } from '../selected-exam-detail.service';
import { Client } from '../client.model';
import { Site } from '../site.model';

@Component({
    selector: 'app-seat',
    styles: [`
    agm-map {
      height: 500px;
    }
  `],
    templateUrl: './seat.component.html'
})
export class SeatComponent {
    @Input() geolocation: number[];
    selectedClient: Client;
    selectedProgram: any;
    @Output() geolocationChange = new EventEmitter<number[]>();
    @Output() selectedSites = new EventEmitter<any[]>();

    public locationDataSource: Observable<any>;
    public Sites: Site[];
    public errorMessage: string;


    public lat: number;
    public lng: number;
    public selectedLocation: string;
    public zoom: number = 1;
    selectedClient$: Subscription;
    public showSelectedDate: boolean = false;
    public constructor(private schedulingApiService: SchedulingApiService, private selectedExamDetailService: SelectedExamDetailService, private router: Router) {
        this.selectedClient$ = selectedExamDetailService.selectedClient.subscribe(
            selectedClient => {
                this.selectedClient = selectedClient;
            });
        this.locationDataSource = Observable
            .create((observer: any) => {
                observer.next(this.geolocation);
            })
            .mergeMap((token: string) => this.getLocation(token));
    }


    getSitesMock() {
        this.schedulingApiService.getSitesMock(this.selectedClient.id).subscribe(
            sites => this.Sites = sites,
            error => this.errorMessage = <any>error
        );
    }

    showTestcenters(event: any) {
        this.getSitesMock();
    }

    public getLocation(token: string): Observable<any> {
        return Observable.of(this.Sites);
    }

    loadSites(event: any): void {
        this.router.navigate(['/scheduling/selectTestCenter']);

    }

    ngOnInit(): void {
        this.getSitesMock();
    }
}
