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

  constructor(private _cookieService: CookieService, private _router: Router){}

  loggedUser = this._cookieService.get("email")

  logOut(){
    console.log("logOut() from dashbaord.comp invoked")
    this._cookieService.removeAll();
    this._router.navigate(['/']);
  }





  ngOnInit() {
      console.log("Dashboard comp",this._cookieService.get('email'))
      if (this.loggedUser == undefined){
        this._router.navigate(['/']);
      }
  }

}
