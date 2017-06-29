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
    console.log('reached http/addUser - ', user);
    return this._http.post('/new_user', user)
    .map((data) => data.json())
    .toPromise();
  }
  // //find user by email
  // {email: ""}
  findUser(email){
    console.log('reached http/findUser()');
    console.log(email);
    return this._http.post('/user', email)
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
  findAllCompanies(user_email){
    console.log('reached http/findAllCompanies()');
    console.log('/companies');
    return this._http.post('/companies/', user_email)
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
  //edit company by id - as url param
  editCompany(id, company){
    console.log('reached http/editCOmpany()');
    console.log('/edit_company/'+id);
    return this._http.post('/edit_company/'+id, company)
    .map((data) => data.json())
    .toPromise();
  }

  deleteCompany(id){
    console.log("reached the http.service deleteCompany()")
    return this._http.get('/delete_company/'+id)
    .map((data)=>{
      data.json()
    })
    .toPromise();
  }

  //weather api
  weatherAPI(address){
    console.log("This is the weatherAPI()")
    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?zip="+address.zip+",us&appid=e06f6de032117e0a2698105710b12b35"
    console.log(weatherURL)
    return this._http.get(weatherURL)
    .map(data => data.json()).toPromise();
  }

  //maps api
  googleAPI(address){
    console.log('entered retreive');
    var url = "http://maps.google.com/maps/api/geocode/json?address="+address.street+"+"+address.city+",+"+address.state;
    console.log(url);
    return this._http.get(url).map(data => data.json()).toPromise();
  }



}
