import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpService } from '../../core/http.service';

import { Client } from './client.model';
import { Program } from './program.model';
import { Exam } from './exam.model';
import { Site } from './site.model';


@Injectable()
export class SelectedExamDetailService {
    private selectedClientSource = new BehaviorSubject<Client>(null);
    private selectedProgramSource = new BehaviorSubject<Program>(null);
    private selectedRegionSource = new BehaviorSubject<Site>(null);
    private selectedExamSource = new BehaviorSubject<Exam>(null);

    selectedClient = this.selectedClientSource.asObservable();
    selectedProgram = this.selectedProgramSource.asObservable();
    selectedRegion = this.selectedRegionSource.asObservable();
    selectedExam = this.selectedExamSource.asObservable();

    constructor(private httpService: HttpService) { }

    setClient(selectedClient: Client) {
        this.selectedClientSource.next(selectedClient);
    }

    setProgram(selectedProgram: Program) {
        this.selectedProgramSource.next(selectedProgram);
    }

    setRegion(selectedRegion: Site) {
        this.selectedRegionSource.next(selectedRegion);
    }

    setExam(selectedExam: Exam) {
        this.selectedExamSource.next(selectedExam);
    }
}
