import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SchedulingApiService } from '../../scheduling-api.service';
import { SelectedExamDetailService } from '../../selected-exam-detail.service';
import { Client } from '../../client.model';

@Component({
    selector: 'app-client-selector',
    templateUrl: './client-selector.component.html'
})
export class ClientSelectorComponent implements OnInit {
    public clientFrm: FormGroup;
    public submitted: boolean;
    clients: Client[];
    selectedClient: Client;
    @Output() enableProgram: EventEmitter<any> = new EventEmitter();

    constructor(private selectedExamDetailService: SelectedExamDetailService, private schedulingApiService: SchedulingApiService, private fb: FormBuilder) { }

    getClientsMock(): void {
        this.schedulingApiService.getClients().subscribe(clients => this.clients = clients);
    }

    ngOnInit() {
        console.log('client selector OnInit');
        this.getClientsMock();
        this.clientFrm = this.fb.group({
            'selectClient': new FormControl('', Validators.required),
        });
    }

    onSelect(client: Client): void {
        this.selectedClient = client;
    }
    gotoProgram(): void {
        this.submitted = true;
        this.enableProgram.emit(this.selectedClient);
        this.selectedExamDetailService.setClient(this.selectedClient);
    }

}
