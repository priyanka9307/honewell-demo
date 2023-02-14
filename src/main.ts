import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js/dist/zone';
import { AppModule } from './app.module';
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
