import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

var platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);