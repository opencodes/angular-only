import { Routes } from '@angular/router';

import { ScheduleAppointmentComponent } from "./schedule-appointment.component";
import { AgreementComponent } from "./agreement/agreement.component";
import { ClientDetailsComponent } from "./client-details/client-details.component";
import { SelectSeatComponent } from "./select-seat/select-seat.component";

export const ScheduleAppointmentRoutes: Routes = [
    {
        path: 'appointment',
        component: ScheduleAppointmentComponent,
        children: [
            { path: '', redirectTo: 'client', pathMatch: 'full' },
            { path: 'agreement', component: AgreementComponent },
            { path: 'client', component: ClientDetailsComponent },
            { path: 'seat', component: SelectSeatComponent }
        ]
    }
];