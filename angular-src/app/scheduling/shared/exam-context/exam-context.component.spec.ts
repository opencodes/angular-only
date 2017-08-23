import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';

import { ExamContextComponent } from './exam-context.component';

describe('ExamContextComponent', () => {
    let component: ExamContextComponent;
    let fixture: ComponentFixture<ExamContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ExamContextComponent ],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(ExamContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
