import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Direction, Contact, Address, Slot, SiteLocation, SiteSlot } from '../../shared/siteSlot.model';
import { Observable, Observer } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import { SchedulingApiService } from '../../shared/scheduling-api.service';
import { SelectedExamDetailService } from '../../shared/selected-exam-detail.service';
import { Client } from '../../shared/client.model';
import { Site } from '../../shared/site.model';
@Component({
    selector: 'app-select-testcenter',
    styles: [`
    agm-map {
      height: 400px;
    }
    .card
    {
        margin-bottom: 0px;
    }
    .card-heading-2 
    {
        padding: 4px 15px;
        border-bottom: 1px solid transparent;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;

    }
  `],
    templateUrl: './testcenter-selecter.component.html'
})
export class TestCenterSelecterComponent implements OnInit {

    public lat: number = 39.7144924;
    public lng: number = -104.9481469;
    selectedClient$: Subscription;
    public selectedClient: Client;
    public selectedSitesIds: any = [];
    public zoom: number = 2;
    public Sites: any;
    public popup: any = { title: "", content: "long page string .....................", placement: "bottom", actionTxt: "More dates at this Test Centre" };
    public siteSlots: SiteSlot[];
    isDesc: boolean = false;
    category: string = 'location.distance';

    constructor(private schedulingApiService: SchedulingApiService, private selectedExamDetailService: SelectedExamDetailService) {
        this.selectedClient$ = selectedExamDetailService.selectedClient.subscribe(
            selectedClient => {
                this.selectedClient = selectedClient;
            });
        this.schedulingApiService.getSitesMock(this.selectedClient.id).subscribe(sites => this.Sites = sites);
        if (this.Sites) {
            this.Sites.map((site: any) => {
                this.selectedSitesIds.push(site.id);
            });
        }
    }

    ngOnInit() {
        this.getSlotMock(this.selectedSitesIds, null, null, null, null, null);
    }

    getSlotMock(siteIds: number[], clientId?: string, programId?: string, examId?: number, startDate?: any, endDate?: any): void {
        this.schedulingApiService.getSlotsMock(siteIds, clientId, programId, examId, startDate, endDate).subscribe(slots => this.siteSlots = slots);
    }

    public selectTestCenter(siteSlot: SiteSlot): void {
        this.lat = siteSlot.location.coordinates[0];
        this.lng = siteSlot.location.coordinates[1];
    }

    sort(event: any, type: string): void {
        event.preventDefault();
        this.isDesc = !this.isDesc;
        this.category = type;
    }

}



