import { Component, OnInit } from '@angular/core';

import {CookieService} from 'angular2-cookie/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _cookieService: CookieService ) { }

  userLogging = {
    email: "",
    password: ""
  }



  ngOnInit() {
    console.log("In the login component. Cookie is: ", this._cookieService.get("email"))
  }

}
