import { enableProdMode} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { BootstrapParams } from './bootstrap-params';

if (environment.production) {
  enableProdMode();
}

window['bootstrapApp'] = function(apiUrl: string, googleMapKey: string) {
    platformBrowserDynamic([{ provide: BootstrapParams, useValue: new BootstrapParams(apiUrl, googleMapKey)}]).bootstrapModule(AppModule);
}