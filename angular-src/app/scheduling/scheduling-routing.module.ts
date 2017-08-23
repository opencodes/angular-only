import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleAppointmentRoutes } from './schedule-appointment/schedule-appointment.routes'

import { SchedulingComponent } from './scheduling.component'
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component'
import { FindAvailabilityComponent } from './find-availability/find-availability.component'

import { TestCenterSelecterComponent } from './schedule-appointment/testcenter-selecter/testcenter-selecter.component'
import { HomeComponent } from '../shared/home.component';

const schedulingRoutes: Routes = [
    {
        path: 'scheduling',
        component: SchedulingComponent,
        children: [
            { path: '', redirectTo: 'scheduling/appointment', pathMatch: 'full' },            
            ...ScheduleAppointmentRoutes,
            { path: 'findAvailability', component: FindAvailabilityComponent },
            { path: 'selectTestCenter', component: TestCenterSelecterComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(schedulingRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SchedulingRoutingModule { }