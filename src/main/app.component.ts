import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'

//importing a main style
import './js/shared/styles/layout.scss';

@Component({
  selector: 'my-app',
  templateUrl: './layouts/default.layout.html',
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
