import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'datepicker-demo',
    templateUrl: './datepicker.component.html'
})
export class DatepickerComponent {
    public dt: Date = new Date();
    public minDate: Date = void 0;
    public events: any[];
    public tomorrow: Date;
    public afterTomorrow: Date;
    public dateDisabled: { date: Date, mode: string }[];
    public formats: string[] = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY',
        'shortDate'];
    public format: string = this.formats[0];
    public dateOptions: any = {
        formatYear: 'YY',
        startingDay: 1
    };
    public currentDate: any;
    private opened: boolean = false;
    @Input() public showSelectedDate: boolean = false;


    public constructor() {
        (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
        (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
        (this.minDate = new Date());
        (
            this.dateDisabled = []
        );
        this.events = [
            { date: this.tomorrow, status: 'full' },
            { date: this.afterTomorrow, status: 'partially' }
        ];
        this.disableAlldates();
    }

    public getDate(): number {
        return this.dt && this.dt.getTime() || new Date().getTime();
    }

   
    public getDayClass(date: any, mode: string): string {
        if (mode === 'day') {
            let dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (let event of this.events) {
                let currentDay = new Date(event.date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return event.status;
                }
            }
        }

        return '';
    }

    public disabled(date: Date, mode: string): boolean {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    }

    public open(): void {
        this.opened = !this.opened;
    }

    public disableAlldates(): void {
        this.dateDisabled = [];

        for (let i = 1; i <= this.dt.getDate() -1 ; i++) {
            this.dateDisabled[i] = { date: new Date(this.dt.getFullYear(), this.dt.getMonth(), i), mode: 'day' };
        }

        for (let i = this.dt.getDate() + 7; i <= new Date(this.dt.getFullYear(), this.dt.getMonth(), 0).getDate(); i++) {
            this.dateDisabled[i] = { date: new Date(this.dt.getFullYear(),this.dt.getMonth(), i), mode: 'day' };
        }
    }
}