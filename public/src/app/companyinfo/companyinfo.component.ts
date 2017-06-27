import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-companyinfo',
  templateUrl: './companyinfo.component.html',
  styleUrls: ['./companyinfo.component.css']
})
export class CompanyinfoComponent implements OnInit {

  lat: number = 37.780337;
  lng: number = -122.403408;

  constructor() { }

//   map = new google.maps.Map(document.getElementById('map'), {
//   center: {lat: -34.397, lng: 150.644},
//   zoom: 8
// });




  ngOnInit() {
  }

}
