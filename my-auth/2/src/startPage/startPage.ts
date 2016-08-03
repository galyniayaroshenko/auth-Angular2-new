import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { contentHeaders } from '../common/headers';

@Component({
  selector: 'login',
  directives: [ ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  templateUrl: './src/startPage/startPage.html',
  styles: [ './src/startPage/startPage.css' ]
})
export class StartPage {
  name = 'ES6';
  constructor(public router: Router, public http: Http) {
  }
}
