import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  
  //CRUD! talk to back end:

  /* USERS */
  //add user to db
  addUser(user) {
    console.log('reached http/addUser - ', 
    user);
    return this._http.post('/new_user', user)
    .map((data) => data.json())
    .toPromise();
  }
  //find user by id - as url param
  findUser()
}
