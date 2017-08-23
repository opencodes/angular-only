import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { SchedulingModule } from './scheduling/scheduling.module';

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, 'Assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        CoreModule,
        SharedModule,
        SchedulingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        })
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [AppComponent]
})
export class AppModule { }
