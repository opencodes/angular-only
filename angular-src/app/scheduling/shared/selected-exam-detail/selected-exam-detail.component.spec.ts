import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';

import { SelectedExamDetailComponent } from './selected-exam-detail.component';

describe('SelectedExamDetailComponent', () => {
    let component: SelectedExamDetailComponent;
    let fixture: ComponentFixture<SelectedExamDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SelectedExamDetailComponent],
            imports: [
                RouterTestingModule,
                TranslateModule.forRoot()
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SelectedExamDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
