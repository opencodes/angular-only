
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DatepickerComponent } from './datepicker.component';

import { PopoverModule } from 'ngx-bootstrap/popover';
import { PopoverConfig } from 'ngx-bootstrap/popover';
import { PopoverComponent } from './popover.component';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header.component';

import { FooterComponent } from './footer.component';

import { Carousel } from './carousel.component';
import { Slide } from './slide.component';

export function getPopoverConfig(): PopoverConfig {
    return Object.assign(new PopoverConfig(), { placement: 'right', container: '', triggers: 'click' });
}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DatepickerModule.forRoot(),
        TooltipModule.forRoot(),
        PopoverModule
    ],
    declarations: [
        DatepickerComponent, Carousel, Slide, HomeComponent, PopoverComponent,HeaderComponent,FooterComponent
    ],
    providers: [{ provide: PopoverConfig, useFactory: getPopoverConfig }],
    exports: [
        CommonModule,
        FormsModule,
        DatepickerComponent,
        Carousel,
        Slide, HomeComponent, PopoverComponent,HeaderComponent,FooterComponent
    ]
})
export class SharedModule { }