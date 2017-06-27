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
  findUser(id){
    console.log('reached http/findUser()');
    console.log('/user/'+id);
    return this._http.get('/user/'+id)
    .map((data) => data.json())
    .toPromise();
  }

  /* COMPANIES */
  //add new company to db
  addCompany(company){
    console.log('reached http/addCompany - ', 
    company);
    return this._http.post('/new_company', company)
    .map((data) => data.json())
    .toPromise();
  }
  //find all companies
  findAllCompanies(){
    console.log('reached http/findAllCompanies()');
    console.log('/companies');
    return this._http.get('/companies/')
    .map((data) => data.json())
    .toPromise();
  }
  //find company by id - as url param
  findCompany(id){
    console.log('reached http/findCompany()');
    console.log('/company/'+id);
    return this._http.get('/company/'+id)
    .map((data) => data.json())
    .toPromise();
  }
}
