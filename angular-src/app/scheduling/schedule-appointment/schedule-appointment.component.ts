import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';

@Component({
    selector: 'app-schedule-appointment',
    styles: [`
    agm-map {
      height: 500px;
    }
  `],
    templateUrl: './schedule-appointment.component.html'
})
export class ScheduleAppointmentComponent {
    public geolocation: number[];
    public selectMonth: number[];

    public monthDataSource: Observable<any>;
    public yearDataSource: [any];
    public locationDataSource: Observable<any>;
    

    public lat: number = 40.7058316;
    public lng: number = -74.2581985;
    public selectedLocation: string;

    public constructor() {

        this.locationDataSource = Observable
            .create((observer: any) => {
                observer.next(this.geolocation);
            })
            .mergeMap((token: string) => this.getLocation(token));

        this.monthDataSource = Observable
            .create((observer: any) => {
                observer.next(this.selectMonth);
            })
            .mergeMap((token: string) => this.getMonthDetail(token));

        this.getYearDetail();
    }

    public getMonthDetail(token: string): Observable<any> {
        return Observable.of([{ Id: 1, Name: "January" }, { Id: 2, Name: "February" }, { Id: 3, Name: "March" }, { Id: 4, Name: "April" }, { Id: 5, Name: "May" },
        { Id: 6, Name: "June" }, { Id: 7, Name: "July" }, { Id: 8, Name: "Auguest" }, { Id: 9, Name: "September" }, { Id: 10, Name: "October" },
        { Id: 11, Name: "November" }, { Id: 12, Name: "December" } ]);
    }

    public getYearDetail(): void {

        this.yearDataSource = [
            { id: 2017, Name: '2017' },
            { id: 2018, Name: '2018' },
            { id: 2019, Name: '2019' },
            { id: 2020, Name: '2020' },
            { id: 2021, Name: '2021' },
            { id: 2022, Name: '2022' }

        ];
       
    }

    public locationOnSelect(e: TypeaheadMatch): void {
        this.lat = e.item.geometry.location.lat;
        this.lng = e.item.geometry.location.lng;
    }

    public monthOnSelect(e: TypeaheadMatch): void {
       
    }

    public getLocation(token: string): Observable<any> {
        return Observable.of([{
            address_components: [],
            formatted_address: "Baltimore, MD, USA",
            geometry: {
                location: {
                    "lat": 39.2903848,
                    "lng": -76.61218930000001
                }
            },
            partial_match: true,
            place_id: "ChIJt4P01q4DyIkRWOcjQqiWSAQ",
            types: [
                "locality",
                "political"
            ]
        },
        {
            address_components: [],
            formatted_address: "California, CA, USA",
            geometry: {
                location: {
                    "lat": 36.7783,
                    "lng": -119.4179
                }
            },
            partial_match: true,
            place_id: "ChIJt4P01q4DyIkRWOcjQqiWSAQ",
            types: [
                "locality",
                "political"
            ]
            },
        {
            address_components: [],
            formatted_address: "Alaska, AL, USA",
            geometry: {
                location: {
                    "lat": 65.7783,
                    "lng": 130.4179
                }
            },
            partial_match: true,
            place_id: "ChIJt4P01q4DyIkRWOcjQqiWSAQ",
            types: [
                "locality",
                "political"
            ]
        },
    
        {
            address_components: [],
            formatted_address: "Colorado, CO, USA",
            geometry: {
                location: {
                    "lat": 37.7783,
                    "lng": 102.4179
                }
            },
            partial_match: true,
            place_id: "ChIJt4P01q4DyIkRWOcjQqiWSAQ",
            types: [
                "locality",
                "political"
            ]
        },
         {
            address_components: [],
            formatted_address: "New York, NW, USA",
            geometry: {
                location: {
                    "lat": 40,
                    "lng": 71
                }
            },
            partial_match: true,
            place_id: "ChIJt4P01q4DyIkRWOcjQqiWSAQ",
            types: [
                "locality",
                "political"
            ]
        }

        ]);
    }

}


