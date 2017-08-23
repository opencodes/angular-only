import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-find-availability',
    templateUrl: './find-availability.component.html'
})
export class FindAvailabilityComponent {
    @Input() selectLocation: boolean = false;
    constructor() { }
    setLocation(event: any) {
        this.selectLocation = true;
    }
}
