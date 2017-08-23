import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';

import { ProgramSelectorComponent } from './program-selector.component';

describe('ProgramSelectorComponent', () => {
    let component: ProgramSelectorComponent;
    let fixture: ComponentFixture<ProgramSelectorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProgramSelectorComponent],
            imports: [
                RouterTestingModule,
                TranslateModule.forRoot()
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProgramSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
