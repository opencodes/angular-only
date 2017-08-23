import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BootstrapParams } from '../../bootstrap-params';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent {
    //The time to show the next photo
    private NextPhotoInterval: number = 3000;
    //Looping or not
    private noLoopSlides: boolean = false;
    //Photos
    private slides: Array<any> = [];

    constructor(private bootstrapParams: BootstrapParams, translate: TranslateService, private router: Router) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
        console.log(this.bootstrapParams);
        this.addNewSlide();
    }

    private addNewSlide() {
        this.slides.push(
            { image: '../../../Assets/images/Slide1.png', text: 'Search Availability' },
            { image:  '../../../Assets/images/Slide2.png', text: 'Confirm Appointment' },

        );
    }

    private removeLastSlide() {
        this.slides.pop();
    }

    navigateToNext(): void {
        this.router.navigate(['/scheduling/findAvailability']); 
    }
}

