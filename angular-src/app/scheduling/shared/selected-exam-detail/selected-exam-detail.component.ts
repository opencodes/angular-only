import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SelectedExamDetailService } from '../selected-exam-detail.service';
import { Client } from '../client.model';
import { Exam } from '../exam.model';
import { Program } from '../program.model';
import { Site } from '../site.model';
@Component({
    selector: 'app-selected-exam-detail',
    templateUrl: './selected-exam-detail.component.html'
})
export class SelectedExamDetailComponent implements OnDestroy {
    errorMessage: string = "";
    selectedClient: Client;
    selectedProgram: Program;
    selectedRegion: Site;
    selectedExam: Exam;
    examSelected: boolean = false;

    selectedClient$: Subscription;
    selectedProgram$: Subscription;
    selectedRegion$: Subscription;
    selectedExam$: Subscription;
    constructor(private selectedExamDetailService: SelectedExamDetailService) {
        this.selectedClient$ = selectedExamDetailService.selectedClient.subscribe(
            selectedClient => {
                this.selectedClient = selectedClient;
            });
        this.selectedProgram$ = selectedExamDetailService.selectedProgram.subscribe(
            selectedProgram => {
                this.selectedProgram = selectedProgram;
            });
        this.selectedRegion$ = selectedExamDetailService.selectedRegion.subscribe(
            selectedRegion => {
                this.selectedRegion = selectedRegion;
            });
        this.selectedExam$ = selectedExamDetailService.selectedExam.subscribe(
            selectedExam => {
                this.selectedExam = selectedExam;
            });
    }

    ngOnDestroy(): void {
    }

}
