import { Component, Output, EventEmitter } from '@angular/core';

import { Client } from '../client.model';
import { Exam } from '../exam.model';
import { Program } from '../program.model';
import { Site } from '../site.model';

@Component({
    selector: 'app-exam-context',
    templateUrl: './exam-context.component.html'
})
export class ExamContextComponent {
    selectedClient: Client;
    selectedProgram: Program;
    selectedRegion: Site;
    selectedExam: Exam;

    isExamSelected: boolean = false;
    enableProgram: boolean = false;

    @Output() selectLocation: EventEmitter<any> = new EventEmitter();

    setClient(val: Client) {
        this.enableProgram = true;
        this.selectedClient = val;
    }
    setProgram(val: Program) {
        this.selectedProgram = val;
        this.isExamSelected = true;
    }
    setRegion(val: Site) {
        this.selectedRegion = val;
    }
    setExam(val: Exam) {
        this.selectedExam = val;
        this.selectLocation.emit(this.isExamSelected);
    }
}
