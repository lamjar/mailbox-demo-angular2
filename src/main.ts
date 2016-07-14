//angular-specific stuff
//this needs to be super-seeded in vendor.ts
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

//our own stuff aka components
import { AppComponent } from './main/app.component';

//routes
import { appRouterProviders } from './main/app.routes';

//enable productionMode for Angular2 depending on ENV
if (process.env.ENV === 'production') {
  enableProdMode();
}

//bootstrap the app with AppComponent as "mainComponent"
bootstrap(AppComponent, [
  appRouterProviders
]).catch(err => console.error(err));
