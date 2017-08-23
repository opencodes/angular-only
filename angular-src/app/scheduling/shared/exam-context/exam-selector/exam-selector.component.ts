import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { SchedulingApiService } from '../../scheduling-api.service';
import { SelectedExamDetailService } from '../../selected-exam-detail.service';
import { Client } from '../../client.model';
import { Exam } from '../../exam.model';
import { Program } from '../../program.model';
import { Site } from '../../site.model';
@Component({
    selector: 'app-exam-selector',
    templateUrl: './exam-selector.component.html'
})
export class ExamSelectorComponent implements OnInit {
    public examFrm: FormGroup;
    public submitted: boolean = false;
    errorMessage: string = "";
    @Input() selectedClient: Client;
    @Input() selectedProgram: Program;
    @Input() selectedRegion: Site;
    selectedExam: Exam;
    exams: Exam[];
    selectedClient$: Subscription;

    constructor(private selectedExamDetailService: SelectedExamDetailService, private schedulingApiService: SchedulingApiService, private fb: FormBuilder) {
        this.selectedClient$ = selectedExamDetailService.selectedClient.subscribe(
            selectedClient => {
                this.selectedClient = selectedClient;
            });
    }
    @Output() isSelectedExam: EventEmitter<Exam> = new EventEmitter();

    getExamsMock() {
        this.schedulingApiService.getExamsMock(this.selectedClient.id, this.selectedProgram.id).subscribe(
            exams => this.exams = exams,
            error => this.errorMessage = <any>error
        );
    }

    ngOnInit() {
        console.log('ExamSelectorComponent OnInit');
        this.getExamsMock();
        this.examFrm = this.fb.group({
            'selectExam': new FormControl('', Validators.required),
        });
    }
    onSelect(exam: Exam): void {
        this.selectedExam = exam;
    }

    checkout(): void {
        this.submitted = true;
        this.isSelectedExam.emit(this.selectedExam);
        this.selectedExamDetailService.setExam(this.selectedExam);
    }

}
