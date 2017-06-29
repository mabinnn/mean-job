import { Component, OnInit } from '@angular/core';

import {CookieService} from 'angular2-cookie/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { HttpService } from './../http.service';
import { Company } from './../company';


@Component({
  selector: 'app-newentry',
  templateUrl: './newentry.component.html',
  styleUrls: ['./newentry.component.css']
})
export class NewentryComponent implements OnInit {

  constructor(private _cookieService: CookieService, private _http: HttpService, private _router: Router) { }

  loggedUser = this._cookieService.get('email');

  newCompany = new Company();

  addCompany(form){
    console.log("Adding Company:", form)
    var new_company = {
      name: this.newCompany.name,
      url: this.newCompany.url,
      role: this.newCompany.url,
      address: {
        street: this.newCompany.street,
        suite: this.newCompany.suite,
        city: this.newCompany.city,
        zip: this.newCompany.zip,
        state: this.newCompany.state
      },
      user: this.loggedUser,
      status: this.newCompany.status,
      notes: this.newCompany.notes,
      contact: {
        contact_name: this.newCompany.contact_name,
        linkedin: this.newCompany.linkedin,
        contact_email: this.newCompany.contact_email,
        phone: this.newCompany.phone,
        note: this.newCompany.note
      }
    }
    console.log("Forced New Company:", new_company);
    this._http.addCompany(new_company)
    .then(data=>{
      console.log("Success")
      this._router.navigate(['/homepage'])
      form.reset()
    })
    .catch(err=>{
      console.log("Error adding company")
    })
  }





  ngOnInit() {
    console.log("newentry comp",this._cookieService.get('email'));
  }

}
