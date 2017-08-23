import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';

import { ClientSelectorComponent } from './client-selector.component';

describe('ClientSelectorComponent', () => {
    let component: ClientSelectorComponent;
    let fixture: ComponentFixture<ClientSelectorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ClientSelectorComponent],
            imports: [
                RouterTestingModule,
                TranslateModule.forRoot()
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ClientSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
