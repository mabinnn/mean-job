import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service';
import {CookieService} from 'angular2-cookie/core';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';  // <-- Import Activated routes for passing param in the url



@Component({
  selector: 'app-companyinfo',
  templateUrl: './companyinfo.component.html',
  styleUrls: ['./companyinfo.component.css']
})
export class CompanyinfoComponent implements OnInit {

  constructor(
    private _cookieService: CookieService, 
    private _router: Router, 
    private _http: HttpService, 
    private _activatedRoute: ActivatedRoute) { }

  param: string;
  displayOneComp: object;

  lat: number = 37.780337;
  lng: number = -122.403408;

  //   map = new google.maps.Map(document.getElementById('map'), {
  //   center: {lat: -34.397, lng: 150.644},
  //   zoom: 8
  // });

  showOneCompany(id){
    console.log("This is the showOneCompany()");
    this._http.findCompany(id)
    .then(data=>{
      console.log("Finding company...");
      console.log("company data:",data);
      this.displayOneComp = data;
    })
    .catch(err=>{
      console.log("Error fetching company by ID");
    })
  }

  editCompany(){

  }


  ngOnInit() {
    // check if cookie is available, if not, redirect to login page
    console.log("companyinfo component cookie:",this._cookieService.get('email'));
    if(!this._cookieService.get('email')){
      this._router.navigate(['/']);  // end check  
    }
    //get the .cat in the url 
    this._activatedRoute.params.subscribe(param=>{
      this.param = param.cat;
      this.showOneCompany(this.param); // <- passing global var
      console.log(param.cat);
    });
    
  }   

}
