import { Component, OnInit } from '@angular/core';

import {CookieService} from 'angular2-cookie/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newentry',
  templateUrl: './newentry.component.html',
  styleUrls: ['./newentry.component.css']
})
export class NewentryComponent implements OnInit {

  loggedUser = this._cookieService.get('email')

  constructor(private _cookieService: CookieService) {
   }





  ngOnInit() {
    console.log("newentry comp",this._cookieService.get('email'));
  }

}
