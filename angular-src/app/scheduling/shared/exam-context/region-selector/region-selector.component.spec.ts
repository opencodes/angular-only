import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';

import { RegionSelectorComponent } from './region-selector.component';

describe('RegionSelectorComponent', () => {
    let component: RegionSelectorComponent;
    let fixture: ComponentFixture<RegionSelectorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegionSelectorComponent],
            imports: [
                RouterTestingModule,
                TranslateModule.forRoot()
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RegionSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
