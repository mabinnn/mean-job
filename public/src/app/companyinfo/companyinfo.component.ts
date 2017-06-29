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
  displayOneComp: any;
  address = {
    street : "",
    city : "",
    zip: "",
    state : ""
  };
  lng: number;
  lat: number;
  weather = {
    temp: 0,
    minTemp : 0,
    maxTemp : 0,
    humidity: 0,
    sky: ""
  };

  getLongLat(){
      console.log(this.address);
      this._http.googleAPI(this.address)
      .then (api => {
        this.lng = api.results[0].geometry.location.lng; 
        this.lat = api.results[0].geometry.location.lat;
        console.log("APIIII:",api);
        console.log(this.lng);
        console.log(this.lat);
      })
      .catch (err => {console.log(err);})
  }
  weatherAPI(){
    console.log("ADDRESS",this.address);
    this._http.weatherAPI(this.address)
    .then(api=>{
      this.weather.temp = Math.floor(api.main.temp*(9/5)-459.67);
      this.weather.minTemp = Math.floor(api.main.temp_min*(9/5)-459.67);
      this.weather.maxTemp = Math.floor(api.main.temp_max*(9/5)-459.67);
      this.weather.humidity = api.main.humidity;
      this.weather.sky = api.weather[0].main;
      console.log(this.weather);
    })
    .catch(err=>{
      console.log("error with the weather api");
    })
  }

  showOneCompany(id){
    console.log("This is the showOneCompany()");
    this._http.findCompany(id)
    .then(data=>{
      console.log("Finding company...");
      console.log("company data:",data);
      this.displayOneComp = data;
      this.address.street = this.displayOneComp.address.street;
      this.address.city = this.displayOneComp.address.city;
      this.address.state = this.displayOneComp.address.state;
      this.address.zip = this.displayOneComp.address.zip;
      this.getLongLat();
      this.weatherAPI();
    })
    .catch(err=>{
      console.log("Error fetching company by ID");
    })
  }

  editCompany(){
    this._router.navigate(['/editcompany', this.param]);
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