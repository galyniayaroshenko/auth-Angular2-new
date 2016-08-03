import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';

const styles = require('./home.css');
const template = require('./home.html');

@Component({
  selector: 'home',
  directives: [ CORE_DIRECTIVES ],
  template: template,
  styles: [ styles ]
})
export class Home {

  constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
  }

  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['/startPage']);
  }
  
  getUser() {
    
    console.log(this.http.get('http://localhost:3001/users'));
  }
}
