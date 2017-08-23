import {NgModule, SkipSelf, Optional} from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoggingService} from './logging.service';
import {HttpService} from './http.service';

import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [HttpService, LoggingService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
