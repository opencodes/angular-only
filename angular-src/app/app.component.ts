
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BootstrapParams } from '../bootstrap-params';
import { Router } from '@angular/router';

declare var $: any;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent   {

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
            { image: '../assets/images/Slide1.png', text: 'BMW 1' },
            { image:  '../assets/images/Slide2.png', text: 'BMW 2' },

        );
    }

    private removeLastSlide() {
        this.slides.pop();
    }

    navigateToNext(): void {
        this.router.navigate(['/scheduling/findAvailability']); 
    }
}
