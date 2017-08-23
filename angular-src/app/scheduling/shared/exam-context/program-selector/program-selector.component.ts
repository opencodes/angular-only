import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SelectedExamDetailService } from '../../selected-exam-detail.service';
import { SchedulingApiService } from '../../scheduling-api.service';
import { Client } from '../../client.model';
import { Program } from '../../program.model';
import { Site } from '../../site.model';

@Component({
    selector: 'app-program-selector',
    templateUrl: './program-selector.component.html'
})

export class ProgramSelectorComponent implements OnInit {
    public programFrm: FormGroup;
    public submitted: boolean;
    @Input() selectedClient: Client;
    programs: Program[];
    selectedProgram: any;
    selectedSite: any;
    errorMessage: string = "";
    @Output() isExamSelected: EventEmitter<any> = new EventEmitter();
    @Output() isSiteSelected: EventEmitter<any> = new EventEmitter();
    constructor(private selectedExamDetailService: SelectedExamDetailService, private schedulingApiService: SchedulingApiService, private fb: FormBuilder) { }
    getProgramsMock() {
        this.schedulingApiService.getPrograms(this.selectedClient.id).subscribe(programs => this.programs = programs,
            error => this.errorMessage = <any>error)
    }
    ngOnInit() {
        console.log('ProgramSelectorComponent OnInit');
        this.getProgramsMock();
        this.programFrm = this.fb.group({
            'selectProgram': new FormControl('', Validators.required),
        });
    }
    onSelect(program: Program): void {
        this.selectedProgram = program;
        console.log('Program Selected');
    }
    setRegion(val: Site) {
        this.submitted = true;
        this.selectedSite = val;
    }
    gotoDetail(): void {
        this.selectedExamDetailService.setProgram(this.selectedProgram);
        this.selectedExamDetailService.setRegion(this.selectedSite);
        this.isExamSelected.emit(this.selectedProgram);
        this.isSiteSelected.emit(this.selectedSite);
    }
}