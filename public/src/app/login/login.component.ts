import { Component, OnInit } from '@angular/core';

import {CookieService} from 'angular2-cookie/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _cookieService: CookieService, private _http: HttpService, private _router: Router) { }

  userLogging = {
    email: "",
    password: ""
  }

  invalidPass = false;

  login(){
    console.log("Reached login() in the login.comp")
    var email = {email: this.userLogging.email};
    var pass = "";
    console.log(email);
    this._http.findUser(email)
    .then(data => {
      console.log("Found:", data);
      pass = data.password;
      if(pass == this.userLogging.password){
        this._cookieService.put("email", this.userLogging.email)
        console.log('!!!');
        this._router.navigate(['/homepage']);
      } else {
        console.log(":( password invalid");
        this.invalidPass = true;
      }
    })
    .catch(err =>{
      console.log("Error finding user by email")
    })
  }



  ngOnInit() {
    console.log("In the login component. Cookie is: ", this._cookieService.get("email"))
  }

}
