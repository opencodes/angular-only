import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SchedulingApiService } from '../../scheduling-api.service';
import { Client } from '../../client.model';
import { Site } from '../../site.model';

@Component({
    selector: 'app-region-selector',
    templateUrl: './region-selector.component.html'
})

export class RegionSelectorComponent implements OnInit {
    public regionFrm: FormGroup;
    public submitted: boolean;
    errorMessage: string = "";
    @Input() selectedClient: Client;
    selectedSite: Site;
    @Output() isSiteSelected: EventEmitter<any> = new EventEmitter();
    countries: Site[];
    constructor(private schedulingApiService: SchedulingApiService, private fb: FormBuilder) { }

    getSitesMock() {
        this.schedulingApiService.getSitesMock(this.selectedClient.id).subscribe(
            countries => this.countries = countries,
            error => this.errorMessage = <any>error
        );
    }

    ngOnInit() {
        console.log('RegionSelectorComponent OnInit');
        this.getSitesMock();
        this.regionFrm = this.fb.group({
            'selectRegion': new FormControl('', Validators.required),
        });
    }
    onSelect(country: Site): void {
        this.submitted = true;
        this.selectedSite = country;
        this.isSiteSelected.emit(this.selectedSite);
    }

}
