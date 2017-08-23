import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BootstrapParams } from '../../bootstrap-params';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {

    constructor(private bootstrapParams: BootstrapParams, translate: TranslateService, private router: Router) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
        console.log(this.bootstrapParams);
      
    }

    navigateToHome(): void {
        this.router.navigate(['/home']); 
    }
}

