import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app.routes';
// import { LoginRoutingModule }   from './login-routing.module';

import { MessagesModule }         from './modules/messages/messages.module';
// import { CrisisCenterModule }   from './crisis-center/crisis-center.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MessagesModule,
    // CrisisCenterModule,
    // LoginRoutingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    // DialogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
