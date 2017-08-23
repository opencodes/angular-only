import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ExamContextModule } from './shared/exam-context/exam-context.module';
import { TranslateModule } from '@ngx-translate/core';
import { SchedulingRoutingModule } from './scheduling-routing.module';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { SchedulingComponent } from './scheduling.component';

import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';
import { AgreementComponent } from './schedule-appointment/agreement/agreement.component';
import { ClientDetailsComponent } from './schedule-appointment/client-details/client-details.component';
import { SelectSeatComponent } from './schedule-appointment/select-seat/select-seat.component';

import { TestCenterSelecterComponent } from './schedule-appointment/testcenter-selecter/testcenter-selecter.component';

import { FindAvailabilityComponent } from './find-availability/find-availability.component';
import { SchedulingApiService } from './shared/scheduling-api.service';
import { SelectedExamDetailService } from './shared/selected-exam-detail.service';

import { GeoLocatorComponent } from './shared/seat/geo-locator.component';
import { SeatComponent } from './shared/seat/seat.component';
import { SelectedExamDetailComponent } from './shared/selected-exam-detail/selected-exam-detail.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        SchedulingRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        ExamContextModule,
        OrderModule,
        FilterPipeModule,
        TypeaheadModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAVL8IGLLmtGb0ap_Kc7aXe7GhPLaGAq8s'
        })
    ],
    providers: [SchedulingApiService, SelectedExamDetailService],
    declarations: [
        SchedulingComponent,
        ScheduleAppointmentComponent,
        AgreementComponent,
        ClientDetailsComponent,
        SelectSeatComponent,
        FindAvailabilityComponent,
        GeoLocatorComponent,
        SeatComponent,
        TestCenterSelecterComponent,
        SelectedExamDetailComponent
    ]
})
export class SchedulingModule { }
