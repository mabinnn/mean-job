import { Component, OnInit } from '@angular/core';


import { HttpService } from './../http.service';
import {CookieService} from 'angular2-cookie/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _cookieService: CookieService, private _router: Router, private _http: HttpService){}

  loggedUser = this._cookieService.get("email");
  currentUserName: string;

  fetchedRecords = [];


  collectCompanies(){
    this._http.findAllCompanies({email: this.loggedUser})
    .then(data=>{
      console.log("Companies collected");
      this.fetchedRecords = data;
    })
    .catch(err=>{
      console.log("Error fetching records to the dashboard");
    });
  }

  delete(id){
    console.log("ID is:",id);
    this._http.deleteCompany(id)
    .then(data => {
      console.log("Deleting");
      this.collectCompanies();
    })
    .catch(err => {
      console.log(err)
    })
  }



  helloMessage(){
    this._http.findUser({email: this.loggedUser})
    .then(data=> {
      console.log("Found user", data);
      this.currentUserName = data.first_name;
    })
    .catch(err=>{
      console.log("Error findin user");
    })
  }

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
      this.helloMessage();
      this.collectCompanies();
  }

}
