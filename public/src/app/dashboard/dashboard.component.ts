import { Component, OnInit } from '@angular/core';

import {CookieService} from 'angular2-cookie/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _cookieService: CookieService) {   }

  ngOnInit() {
        console.log("newentry comp",this._cookieService.get('email'))
  }

}
