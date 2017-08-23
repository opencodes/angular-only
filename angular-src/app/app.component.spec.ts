import { } from 'jasmine';

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';

import { AppComponent } from './app.component';

import { BootstrapParams } from '../bootstrap-params';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      declarations: [
          AppComponent
      ],
      providers: [{ provide: BootstrapParams, useValue: new BootstrapParams('test base url', 'test googleMap key')}]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
