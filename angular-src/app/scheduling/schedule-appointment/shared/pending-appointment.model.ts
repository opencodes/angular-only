import { Appointment } from '../../shared/appointment.model';
import { Eligibility } from './eligibility.model';

export class PendingAppointment extends Appointment {
    eligibility: Eligibility;
}
