import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {LoginModule} from './login.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);