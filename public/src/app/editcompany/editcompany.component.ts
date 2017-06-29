import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service';
import {CookieService} from 'angular2-cookie/core';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})
export class EditcompanyComponent implements OnInit {

  constructor(
    private _cookieService: CookieService, 
    private _router: Router, 
    private _http: HttpService,
    private _activatedRoute: ActivatedRoute
  ) { }

  param: string;
  displayOneComp: object;


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

  editCompany(form){
    console.log('reached editCompany()');
    this._http.editCompany(this.param, this.displayOneComp)
    .then(data => {
      console.log('COMPANY EDITED!');
      this._router.navigate(['/information', this.param]);
    })
    .catch(error => {
      console.log("company edit failed :'(", error);
    })
  }

  ngOnInit() {
    if(!this._cookieService.get("email")){
      this._router.navigate(['/']);
    }
    this._activatedRoute.params.subscribe(param=>{
      this.param = param.dog;
      this.showOneCompany(this.param); // <- passing global var
      console.log(param.dog);
    });
  }

}
