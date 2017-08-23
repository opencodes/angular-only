import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '../../../core/core.module';

import { ExamContextComponent } from './exam-context.component';
import { ProgramSelectorComponent } from './program-selector/program-selector.component';
import { ExamSelectorComponent } from './exam-selector/exam-selector.component';
import { RegionSelectorComponent } from './region-selector/region-selector.component';
import { ClientSelectorComponent } from './client-selector/client-selector.component';
import { SchedulingApiService } from '../scheduling-api.service';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ExamContextComponent, ProgramSelectorComponent, ExamSelectorComponent, RegionSelectorComponent, ClientSelectorComponent
    ],
    providers: [SchedulingApiService],
    exports: [
        ExamContextComponent
    ]
})
export class ExamContextModule { }
