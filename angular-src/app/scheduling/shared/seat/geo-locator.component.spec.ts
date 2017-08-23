import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GeoLocatorComponent } from './geo-locator.component';
import { BootstrapParams } from '../../../../bootstrap-params';

describe('GeoLocatorComponent', () => {
    let component: GeoLocatorComponent;
    let fixture: ComponentFixture<GeoLocatorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GeoLocatorComponent],
            imports: [
                RouterTestingModule,
                TranslateModule.forRoot(),
                FormsModule,
                TypeaheadModule.forRoot(),
                HttpModule
            ],
            providers: [{ provide: BootstrapParams, useValue: new BootstrapParams('test base url', 'test googleMap key') }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GeoLocatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
