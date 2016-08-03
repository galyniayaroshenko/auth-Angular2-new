import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { contentHeaders } from '../common/headers';
import { LoginValidator } from './loginValidator';

import {Control, ControlGroup, FormBuilder, Validators} from '@angular/common';

const styles   = require('./login.css');
const template = require('./login.html');

@Component({
  selector: 'login',
  directives: [ ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: template,
  styles: [ styles ]
})
export class Login {
  form: ControlGroup;
  constructor(public router: Router, public http: Http, formbuilder: FormBuilder) {
    this.form = formbuilder.group({
                username: ['', Validators.compose([Validators.required, 
                               LoginValidator.underscorecheck])],
                password: []
            })
  }

  login(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['/home']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  signup(event) {
    event.preventDefault();
    this.router.navigate(['/signup']);
  }
}
