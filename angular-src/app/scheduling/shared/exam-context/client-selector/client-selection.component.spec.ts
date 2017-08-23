import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';

import { ClientSelectionComponent } from './client-selection.component';

describe('ClientSelectionComponent', () => {
    let component: ClientSelectionComponent;
    let fixture: ComponentFixture<ClientSelectionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ClientSelectionComponent],
            imports: [
                RouterTestingModule,
                TranslateModule.forRoot()
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ClientSelectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
