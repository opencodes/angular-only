import { Component, Input, Output } from '@angular/core';

@Component({
    selector: 'popover',
    template: `
                <template #popTemplate>
                    <datepicker-demo class="calPopTheme"></datepicker-demo>
                    <article class="slotsWrpr" *ngIf="isSlotSelected">
                        <h3 class="heading"><span>Thu</span> Aug 27</h3>
                        <ul class="list-unstyled">
                            <li><button class="btn btn-success select">9:00 AM</button></li>
                            <li><button class="btn btn-success select">11:00 PM</button></li>
                            <li><button class="btn btn-success select">9:00 AM</button></li>
                            <li><button class="btn btn-success select">11:00 PM</button></li>
                        </ul>
                    </article>
                </template>
                <button type="button" class="btn moreAction"
                        [popover]="popTemplate" popoverTitle={{title}} placement={{placement}}>
                  {{actionTxt}}
                </button>
                `,
})

export class PopoverComponent {
    @Input() public title: string = 'Title';
    @Input() public content: string = 'Long Decription ...';
    @Input() public placement: string = 'top';
    @Input() public actionTxt: string = "Click Me";
    @Input() public isSlotSelected: boolean = false;
}