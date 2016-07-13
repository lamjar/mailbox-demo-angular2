import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'

//importing a main style
import '../../public/css/styles.css';
import '../main/js/shared/styles/layout.scss';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
