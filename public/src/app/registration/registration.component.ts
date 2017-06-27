import { Component, OnInit } from '@angular/core';
import { User } from './../user';

import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _router: Router) { }

  newuser = new User()

  submitRegForm(form){
    console.log("Subitted:", this.newuser)
    this._router.navigate(['/homepage']);
  }



  ngOnInit() {
  }

}
