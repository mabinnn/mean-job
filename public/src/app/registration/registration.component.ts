import { Component, OnInit } from '@angular/core';
import { User } from './../user';

import { HttpService } from './../http.service';
import { CookieService } from 'angular2-cookie/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _router: Router, private _cookieService:CookieService, private _http: HttpService) { }

  newuser = new User();
  failBool: boolean;


  submitRegForm(form){

    if(!form.valid || this.newuser.password !== this.newuser.confirmpassword){
      this.invalidForm();
      return;
    } else {
      this._cookieService.put('email', this.newuser.email);
      console.log("the cookie is:", this._cookieService.get('email'));
      this._http.addUser(this.newuser)
      .then(data =>{
        console.log("Created user into the database: ", this.newuser);
      })
      .catch(err =>{
        console.log("Error adding user who is trying to register.");
      })
      this._router.navigate(['/homepage']);
    }
  }

  // This function sets the boolean to true so we can display a div in the html
  invalidForm(){
    console.log("Invalid Form, or passwords are not matching");
    this.failBool = true;
  }




  ngOnInit() {
  }

}
