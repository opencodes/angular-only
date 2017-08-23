
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { HttpService } from '../../core/http.service';

import { Client } from './client.model';
import { Program } from './program.model';
import { Exam } from './exam.model';
import { Site } from './site.model';
import { environment } from '../../environments/environment';

import { Direction, Contact, Address, Slot, SiteLocation, SiteSlot } from './siteSlot.model';

@Injectable()
export class SchedulingApiService {
    constructor(private httpService: HttpService) { }

    getClientsMock(): Observable<Client[]> {
        const clients: Client[] = [
            { id: '1', name: 'client 1', uri: '', code: '', requiresBiometricConsent: false, location: null },
           { id: '2', name: 'client 2', uri: '', code: '', requiresBiometricConsent: true,  location: null },
           { id: '3', name: 'client 3', uri: '', code: '', requiresBiometricConsent: false, location: null },
            { id: '4', name: 'client 4', uri: '', code: '', requiresBiometricConsent: false, location: null },
           ];
        return Observable.of(clients);
    }

    getProgramsMock(clientId: string): Observable<Program[]> {
        const programs: Program[] = [
            { id: '1', code: 'pgrm1', uri: `Clients/${clientId}/Programs/1`, name: `pgrm-1-${clientId}` },
            { id: '2', code: 'pgrm2', uri: `Clients/${clientId}/Programs/2`, name: `pgrm-2-${clientId}` },
            { id: '3', code: 'pgrm3', uri: `Clients/${clientId}/Programs/3`, name: `pgrm-3-${clientId}` },
            { id: '4', code: 'pgrm4', uri: `Clients/${clientId}/Programs/4`, name: `pgrm-4-${clientId}` }
        ];
        return Observable.of(programs);
    }

    getExamsMock(clientId: string, programId: string): Observable<Exam[]> {
        const exams: Exam[] = [
            { id: '1', code: 'exm1', uri: `Clients/${clientId}/Programs/${programId}/Exams/1/`, name: `exam1-${clientId}-${programId}` },
            { id: '2', code: 'exm2', uri: `Clients/${clientId}/Programs/${programId}/Exams/2/`, name: `exam2-${clientId}-${programId}` },
            { id: '3', code: 'exm3', uri: `Clients/${clientId}/Programs/${programId}/Exams/3/`, name: `exam3-${clientId}-${programId}` },
            { id: '4', code: 'exm4', uri: `Clients/${clientId}/Programs/${programId}/Exams/4/`, name: `exam4-${clientId}-${programId}` }
        ];
        return Observable.of(exams);
    }

    getSitesMock(clientId?: string, programId?: string, examId?: string, coordinates?: number[], radius?: number, eligibilityId?: number, accommodations?: any): Observable<Site[]> {
        const sites: Site[] = [
            {
                id: '1', uri: 'Sites/1/', type: 'site-1', prefix: `site-${clientId}-${programId}-${examId}-1`, location: {
                    lat: 65.7783,
                    lng: 130.4179
                }
            },
            {
                id: '2', uri: 'Sites/2/', type: 'site-2', prefix: `site-${clientId}-${programId}-${examId}-2`, location: {
                    lat: 66.7783,
                    lng: 131.4179
                }
            },
            {
                id: '3', uri: 'Sites/3/', type: 'site-3', prefix: `site-${clientId}-${programId}-${examId}-3`, location: {
                    lat: 67.7783,
                    lng: 132.4179
                }
            },
            {
                id: '4', uri: 'Sites/4/', type: 'site-4', prefix: `site-${clientId}-${programId}-${examId}-4`, location: {
                    lat: 68.7783,
                    lng: 133.4179
                }
            },
            {
                id: '5', uri: 'Sites/5/', type: 'site-5', prefix: `site-${clientId}-${programId}-${examId}-5`, location: {
                    lat: 69.7783,
                    lng: 134.4179
                }
            }
        ];
        return Observable.of(sites);
    }
    
    getSlotsMock(siteIds: number[], clientId?: string, programId?: string, examId?: number, startDate?: any, endDate?: any): Observable<SiteSlot[]> {
        const siteSlot: SiteSlot[] = [
            {
                id: "1234",
                uri: "https://api.prometric.com/Sites/1234/",
                type: "Permanent",
                prefix: "APCN",
                location: {
                    address: {
                        addressLine: [
                            "Prometric",
                            "Test centre Unit 1",
                            "100 S Madison St"
                        ],
                        locality: "Colorado",
                        adminDistrict: "CO",
                        postalCode: "21224",
                        country: "USA",
                        formattedAddress: " Prometric, 1st Mariner Tower, 1501 S Clinton St, Baltimore, Maryland 21224, United States"
                    },
                    coordinates: [
                        39.7144924,
                        -104.9481469
                    ],
                    contact: {
                        phoneNumber: "+1 800-532-2169",
                        faxNumber: "+1 800-532-2168"
                    },
                    directions: {
                        name: "Prometric Test Center",
                        generalMemo: "Site will close for renovations on June.",
                        schedulingMemo: "Site #1235 is located at the same address.",
                        direction: "Call site for directions."
                    },
                    distance: 0.75
                },
                slots: [
                    {
                        id: "1A7f4",
                        uri: "https://api.prometric.com/Slots/1A7f4/",
                        startDateTime: "2015-08-28 11:45:00",
                        duration: 30
                    },

                    {
                        id: "1A2f3",
                        uri: "https://api.prometric.com/Slots/1A2f3/",
                        startDateTime: "2015-08-28 15:30:00",
                        duration: 30
                    }
                ]

            },
            {
                id: "3214",
                uri: "https://api.prometric.com/Sites/1234/",
                type: "Permanent",
                prefix: "APCN",
                location: {
                    address: {
                        addressLine: [
                            "Prometric X",
                            "Test centre Unit 2",
                            "3237 E Colfax Ave"
                        ],
                        locality: "Colorado",
                        adminDistrict: "CO",
                        postalCode: "21224",
                        country: "USA",
                        formattedAddress: " Prometric, 1st Mariner Tower, 1501 S Clinton St, Baltimore, Maryland 21224, United States"
                    },
                    coordinates: [
                        39.7403836,
                        -104.951287
                    ],
                    contact: {
                        phoneNumber: "+1 800-532-2169",
                        faxNumber: "+1 800-532-2168"
                    },
                    directions: {
                        name: "Prometric Test Center1",
                        generalMemo: "Site will close for renovations on June.",
                        schedulingMemo: "Site #1235 is located at the same address.",
                        direction: "Call site for directions."
                    },
                    distance: 1
                },
                slots: [
                    {
                        id: "1A7f4",
                        uri: "https://api.prometric.com/Slots/1A7f4/",
                        startDateTime: "2017-9-04 09:30:00",
                        duration: 30
                    },

                    {
                        id: "1A2f3",
                        uri: "https://api.prometric.com/Slots/1A2f3/",
                        startDateTime: "2017-9-04 10:30:00",
                        duration: 30
                    },
                    {
                        id: "1A2f3",
                        uri: "https://api.prometric.com/Slots/1A2f3/",
                        startDateTime: "2017-9-04 13:30:00",
                        duration: 30
                    },
                    {
                        id: "1A2f3",
                        uri: "https://api.prometric.com/Slots/1A2f3/",
                        startDateTime: "2017-9-04 15:30:00",
                        duration: 30
                    }
                ]

            },
            {
                id: "1254",
                uri: "https://api.prometric.com/Sites/1234/",
                type: "Permanent",
                prefix: "APCN",
                location: {
                    address: {
                        addressLine: [
                            "Prometric X", 
                            "Test centre Unit 3",
                            "500 W 36th Ave,Anchorage"
                        ],
                        locality: "Alsaka",
                        adminDistrict: "AK",
                        postalCode: "21224",
                        country: "USA",
                        formattedAddress: " Prometric, 1st Mariner Tower, 1501 S Clinton St, Baltimore, Maryland 21224, United States"
                    },
                    coordinates: [
                        61.1876596,
                        -149.8947378
                    ],
                    contact: {
                        phoneNumber: "+1 800-532-2169",
                        faxNumber: "+1 800-532-2168"
                    },
                    directions: {
                        name: "Prometric Test Center1",
                        generalMemo: "Site will close for renovations on June.",
                        schedulingMemo: "Site #1235 is located at the same address.",
                        direction: "Call site for directions."
                    },
                    distance: 0.5
                },
                slots: [
                    {
                        id: "1A7f4",
                        uri: "https://api.prometric.com/Slots/1A7f4/",
                        startDateTime: "2017-9-05 08:30:00",
                        duration: 30
                    },

                    {
                        id: "1A2f3",
                        uri: "https://api.prometric.com/Slots/1A2f3/",
                        startDateTime: "2017-9-05 10:30:00",
                        duration: 30
                    },
                    {
                        id: "1A2f3",
                        uri: "https://api.prometric.com/Slots/1A2f3/",
                        startDateTime: "2017-9-05 16:30:00",
                        duration: 30
                    }
                    
                ]

            }


        ];

        return Observable.of(siteSlot);
    }

    getClients(): Observable<Client[]> {
        return Observable.create((observer: Observer<Client[]>) => {
            this.httpService.get('Clients/')
                .map(this.getResultArray)
                .subscribe((rArray) => {
                    let clients: Client[] = rArray.map(rItem => {
                        return {
                            id: rItem.id,
                            name: rItem.name,
                            uri: rItem.uri,
                            code: rItem.code,
                            requiresBiometricConsent: rItem.requiresBiometricConsent,
                            location: rItem.location
                        }
                    });
                    observer.next(clients);
                    observer.complete();
                });
        });
    }

    private getResultArray(apiResponse: any): any[] {
        let resultArray = apiResponse.results;
        return resultArray || [];
    }

     getPrograms(clientId: string): Observable<Program[]> {
        return Observable.create((observer: Observer<Program[]>) => {
            this.httpService.get(environment.apiUrl + 'Clients/')
                .map(this.getResultArray)
                .subscribe((rArray) => {
                    let programs: Program[] = rArray.map(rItem => {
                        return {
                            id : rItem.name.id,
                            name: rItem.name,
                            uri: rItem.uri,
                            code: rItem.code,
                            requiresBiometricConsent: rItem.requiresBiometricConsent,
                            location: rItem.location
                        }
                    });
                    observer.next(programs);
                    observer.complete();
                });
        });
    }

}
