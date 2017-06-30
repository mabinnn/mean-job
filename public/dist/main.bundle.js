webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newentry_newentry_component__ = __webpack_require__("../../../../../src/app/newentry/newentry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__companyinfo_companyinfo_component__ = __webpack_require__("../../../../../src/app/companyinfo/companyinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editcompany_editcompany_component__ = __webpack_require__("../../../../../src/app/editcompany/editcompany.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: "", pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: "addnew", component: __WEBPACK_IMPORTED_MODULE_4__newentry_newentry_component__["a" /* NewentryComponent */] },
    { path: "homepage", component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: "information/:cat", component: __WEBPACK_IMPORTED_MODULE_6__companyinfo_companyinfo_component__["a" /* CompanyinfoComponent */] },
    { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: "editcompany/:dog", component: __WEBPACK_IMPORTED_MODULE_7__editcompany_editcompany_component__["a" /* EditcompanyComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__newentry_newentry_component__ = __webpack_require__("../../../../../src/app/newentry/newentry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__companyinfo_companyinfo_component__ = __webpack_require__("../../../../../src/app/companyinfo/companyinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__editcompany_editcompany_component__ = __webpack_require__("../../../../../src/app/editcompany/editcompany.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Importing @agm/core for Google mpas

// Importing components









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__newentry_newentry_component__["a" /* NewentryComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__companyinfo_companyinfo_component__["a" /* CompanyinfoComponent */],
            __WEBPACK_IMPORTED_MODULE_13__registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_14__editcompany_editcompany_component__["a" /* EditcompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_15__filter_pipe__["a" /* FilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyB4kOD9AMomNP4OswtJNFTkgQtJleJSNV8' // <-- Using my API Key for google maps
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__["CookieService"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/company.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = (function () {
    function Company(
        // public name: string = "",
        // public url: string = "",
        // public role: string = "",
        // public address: object = {
        //     street: "",
        //     suite: "",
        //     city: "",
        //     zip: 0,
        //     state: "",
        // },
        // public user = "",
        // public contact: object = {
        //     name: "",
        //     linkedin: "",
        //     contact_email: "",
        //     phone: "",
        //     notes: "",
        // },
        // public notes: Array<string> = [],
        // public status = ""
        name, url, role, address, street, suite, city, zip, state, contact_name, notes, linkedin, contact_email, phone, note, status) {
        if (name === void 0) { name = ""; }
        if (url === void 0) { url = ""; }
        if (role === void 0) { role = ""; }
        if (address === void 0) { address = ""; }
        if (street === void 0) { street = ""; }
        if (suite === void 0) { suite = ""; }
        if (city === void 0) { city = ""; }
        if (zip === void 0) { zip = ""; }
        if (state === void 0) { state = ""; }
        if (contact_name === void 0) { contact_name = ""; }
        if (notes === void 0) { notes = ""; }
        if (linkedin === void 0) { linkedin = ""; }
        if (contact_email === void 0) { contact_email = ""; }
        if (phone === void 0) { phone = ""; }
        if (note === void 0) { note = ""; }
        if (status === void 0) { status = ""; }
        this.name = name;
        this.url = url;
        this.role = role;
        this.address = address;
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zip = zip;
        this.state = state;
        this.contact_name = contact_name;
        this.notes = notes;
        this.linkedin = linkedin;
        this.contact_email = contact_email;
        this.phone = phone;
        this.note = note;
        this.status = status;
    }
    return Company;
}());

//# sourceMappingURL=company.js.map

/***/ }),

/***/ "../../../../../src/app/companyinfo/companyinfo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nagm-map {\n    height: 500px;\n    width: 800px;\n}\n.googlemaps {\n    /*margin: 0 auto 0 auto;*/\n    margin-top: 10px;\n    width: 800px;\n    margin-left: auto;\n    margin-right: auto;\n}\n.nav {\n    margin-top: 10px;\n}\np, a {\n    display: block;\n    margin-left: 15px;\n}\n.container {\n    margin-bottom: 100px;\n}\n.displaycompany {\n    display: inline-block;\n    vertical-align: top;\n    margin-left: 200px;\n    height: 300px;\n    width: 320px;\n    padding: 20px;\n}\n.visit {\n    display: inline-block;\n    vertical-align: top;\n    margin-right: 200px;\n    height: 300px;\n    width: 320px;\n    padding: 20px;\n    text-align: left;\n}\n.pull-left {\n    margin-top: 5px;\n}\n.pull-right {\n    margin-top: 5px;\n}\n.editbutton {\n    margin-top: 25px;\n    padding-right: 20px;\n    text-align: center; \n}\nlegend {\n    margin-top: 15px;\n}\n.grn {\n    color: #73a839;\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/companyinfo/companyinfo.component.html":
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://bootswatch.com/cerulean/bootstrap.min.css\">\n\n<div class=\"container\">\n  <!--Nav bar to search compnanies-->\n  <div class=\"nav\">\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <form class=\"navbar-form navbar-right\" role=\"search\" method=\"get\" action=\"http//www.google.com/search\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Comapany!\" value=\"\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n          </form>\n            <div class=\"pull-left\">\n              <a class=\"btn btn-success\" [routerLink]=\"['/homepage']\" >Back to Dashboard</a>\n            </div>\n        </div>\n      </div>\n    </nav>      \n  </div>\n\n  <!--Display Google Maps-->\n  <div class=\"googlemaps\"> \n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"14\">\n      <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n    </agm-map>\n  </div>\n\n  <!--Display Comapny details-->\n\n  <div class=\"editbutton\">\n    <button (click)=\"editCompany()\" class=\"btn btn-default\">Edit Company Details</button>\n  </div>\n\n  <div class=\"displaycompany\">\n    <legend> {{displayOneComp.name}}</legend>\n    <p>Added on <i> {{ displayOneComp.createdAt | date:\"longDate\" }} </i> </p>\n    <a href=\"http://{{displayOneComp.url}}\">Job Website</a>\n    <p><span class=\"grn\">Role:</span> {{displayOneComp.role}}</p>\n    <p><span class=\"grn\">Notes:</span> {{displayOneComp.notes}}</p>\n    <p><span class=\"grn\">Status:</span> {{displayOneComp.status}}</p>\n    <div class=\"contact\">\n      <legend> Contact Person</legend>\n      <p>{{displayOneComp.contact.contact_name}}</p>\n      <p><a href=\"{{displayOneComp.contact.linkedin}}\" *ngIf=\"displayOneComp.contact.linkedin\">LinkedIn</a></p>\n      <p><span class=\"grn\">Email:</span> {{displayOneComp.contact.contact_email}}</p>\n      <p><span class=\"grn\">Phone:</span> {{displayOneComp.contact.phone}}</p>\n      <p><span class=\"grn\">Notes:</span> {{displayOneComp.contact.note}}</p>\n    </div>\n  </div>\n\n  <!--Office visit-->\n  <div class=\"visit\">\n    <legend>Visiting Onsite?</legend>\n    <p><b>Address:</b></p>\n    <p>{{displayOneComp.address.street}}</p>\n    <p>{{displayOneComp.address.suite}}</p>\n    <p>{{displayOneComp.address.city}}, {{displayOneComp.address.state}} {{displayOneComp.address.zip}}</p>\n    <p *ngIf=\"weather.temp\"><b>Weather:</b></p>\n    <p *ngIf=\"weather.temp\"><span class=\"grn\">Temperature:</span> {{weather.temp}} °F</p>\n    <p *ngIf=\"weather.temp\"><span class=\"grn\">High:</span> {{weather.maxTemp}} °F</p>\n    <p *ngIf=\"weather.temp\"><span class=\"grn\">Low:</span> {{weather.minTemp}} °F</p>\n    <p *ngIf=\"weather.temp\"><span class=\"grn\">Humidity:</span> {{weather.minTemp}}%</p>\n    <p *ngIf=\"weather.temp\"><span class=\"grn\">Conditions:</span> {{weather.sky}}</p>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/companyinfo/companyinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyinfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 // <-- Import Activated routes for passing param in the url
var CompanyinfoComponent = (function () {
    function CompanyinfoComponent(_cookieService, _router, _http, _activatedRoute) {
        this._cookieService = _cookieService;
        this._router = _router;
        this._http = _http;
        this._activatedRoute = _activatedRoute;
        this.address = {
            street: "",
            city: "",
            zip: "",
            state: ""
        };
        this.weather = {
            temp: 0,
            minTemp: 0,
            maxTemp: 0,
            humidity: 0,
            sky: ""
        };
    }
    CompanyinfoComponent.prototype.getLongLat = function () {
        var _this = this;
        console.log(this.address);
        this._http.googleAPI(this.address)
            .then(function (api) {
            _this.lng = api.results[0].geometry.location.lng;
            _this.lat = api.results[0].geometry.location.lat;
            console.log("APIIII:", api);
            console.log(_this.lng);
            console.log(_this.lat);
        })
            .catch(function (err) { console.log(err); });
    };
    CompanyinfoComponent.prototype.weatherAPI = function () {
        var _this = this;
        console.log("ADDRESS", this.address);
        this._http.weatherAPI(this.address)
            .then(function (api) {
            _this.weather.temp = Math.floor(api.main.temp * (9 / 5) - 459.67);
            _this.weather.minTemp = Math.floor(api.main.temp_min * (9 / 5) - 459.67);
            _this.weather.maxTemp = Math.floor(api.main.temp_max * (9 / 5) - 459.67);
            _this.weather.humidity = api.main.humidity;
            _this.weather.sky = api.weather[0].main;
            console.log(_this.weather);
        })
            .catch(function (err) {
            console.log("error with the weather api");
        });
    };
    CompanyinfoComponent.prototype.showOneCompany = function (id) {
        var _this = this;
        console.log("This is the showOneCompany()");
        this._http.findCompany(id)
            .then(function (data) {
            console.log("Finding company...");
            console.log("company data:", data);
            _this.displayOneComp = data;
            _this.address.street = _this.displayOneComp.address.street;
            _this.address.city = _this.displayOneComp.address.city;
            _this.address.state = _this.displayOneComp.address.state;
            _this.address.zip = _this.displayOneComp.address.zip;
            _this.getLongLat();
            _this.weatherAPI();
        })
            .catch(function (err) {
            console.log("Error fetching company by ID");
        });
    };
    CompanyinfoComponent.prototype.editCompany = function () {
        this._router.navigate(['/editcompany', this.param]);
    };
    CompanyinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // check if cookie is available, if not, redirect to login page
        console.log("companyinfo component cookie:", this._cookieService.get('email'));
        if (!this._cookieService.get('email')) {
            this._router.navigate(['/']); // end check  
        }
        //get the .cat in the url 
        this._activatedRoute.params.subscribe(function (param) {
            _this.param = param.cat;
            _this.showOneCompany(_this.param); // <- passing global var
            console.log(param.cat);
        });
    };
    return CompanyinfoComponent;
}());
CompanyinfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-companyinfo',
        template: __webpack_require__("../../../../../src/app/companyinfo/companyinfo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/companyinfo/companyinfo.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], CompanyinfoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=companyinfo.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.mytable {\n    width: 100%;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    margin-top: 30px;\n    margin-bottom: 50px;\n}\n.container {\n    margin-top: 50px;\n}\n.div-left {\n    float: left;\n    padding-left: 10px;\n}\n.div-right {\n    float: right;\n    padding-right: 10px;\n}\n.header {\n    display: block;\n}\na, {\n    margin-right: 15px;\n}\n.red {\n    color: red;\n}\ntd {\n    font-family: San Francisco, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', sans-serif;\n    letter-spacing: -0.02em;\n    font-size: 14px;\n}\n.pull-left {\n    margin-top: 5px;\n}\n#logout, #prof {\n    margin-top: 5px;\n}\n.btn-success , #add-new{\n    display: block;\n    height: 40px;\n    border-radius: 45px;\n    margin-top: 100px;\n    width: 10%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://bootswatch.com/cerulean/bootstrap.min.css\">\n\n<div class=\"container\"> \n\n    <!--Top navigation bar-->\n  <div class=\"nav\">\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <div class=\"pull-left\" id=\"prof\"> \n            <a class=\"btn btn-info\" [routerLink]=\"['/homepage']\" >User Profile</a>\n          </div>\n          <div class=\"pull-right\" id=\"logout\">\n            <button class=\"btn btn-warning\" (click)=\"logOut()\">Logout</button>\n          </div>\n        </div>\n      </div>\n    </nav>      \n  </div>  \n\n  <div class=\"header\">\n      <div class=\"div-left\">\n        <h1>Welcome, {{ currentUserName }}</h1>\n      </div>\n      <div class=\"div-right\">\n        <h3>Job Search</h3>\n          <a href=\"http://www.linkedin.com\">LinkedIn |</a>\n          <a href=\"http://www.indeed.com\">Indeed |</a>\n          <a href=\"http://www.monster.com\">Monster</a>\n      </div>\n  </div>\n  <div>\n    <a id=\"addnew\" [routerLink]=\"['/addnew']\" class=\"btn btn-success\">Add New +</a> \n  </div>\n  <div class=\"mytable\">\n    <table class=\"table table-striped table-hover \">\n      <tr>\n        <th>Company Name</th>\n        <th>Position</th>\n        <th>Date Added</th>\n        <th>Status</th>\n        <th>Notes</th>\n        <th>Action</th>\n      </tr>\n          <tr class=\"success\" *ngFor=\"let company of fetchedRecords\">\n              <td><a [routerLink]=\"['/information', company._id]\"> {{company.name}} </a></td>\n              <td>{{company.role}}</td>\n              <td>{{company.createdAt | date:'longDate' }}</td>\n              <td>{{company.status}}</td>\n              <td>{{company.notes}}</td>\n              <td><a class=\"red\" (click)=\"delete(company._id)\">Delete</a></td> \n          </tr>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(_cookieService, _router, _http) {
        this._cookieService = _cookieService;
        this._router = _router;
        this._http = _http;
        this.loggedUser = this._cookieService.get("email");
        this.fetchedRecords = [];
        this.companyNames = [];
    }
    DashboardComponent.prototype.getCompByName = function () {
        for (var _i = 0, _a = this.fetchedRecords; _i < _a.length; _i++) {
            var x = _a[_i];
            this.companyNames.push(x.name);
        }
    };
    DashboardComponent.prototype.collectCompanies = function () {
        var _this = this;
        this._http.findAllCompanies({ email: this.loggedUser })
            .then(function (data) {
            console.log("Companies collected");
            _this.fetchedRecords = data;
            _this.getCompByName(); // <-- store comp names into an array
        })
            .catch(function (err) {
            console.log("Error fetching records to the dashboard");
        });
    };
    DashboardComponent.prototype.delete = function (id) {
        var _this = this;
        console.log("ID is:", id);
        this._http.deleteCompany(id)
            .then(function (data) {
            console.log("Deleting");
            _this.collectCompanies();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    DashboardComponent.prototype.helloMessage = function () {
        var _this = this;
        this._http.findUser({ email: this.loggedUser })
            .then(function (data) {
            console.log("Found user", data);
            _this.currentUserName = data.first_name;
        })
            .catch(function (err) {
            console.log("Error findin user");
        });
    };
    DashboardComponent.prototype.logOut = function () {
        console.log("logOut() from dashbaord.comp invoked");
        this._cookieService.removeAll();
        this._router.navigate(['/']);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        console.log("Dashboard comp", this._cookieService.get('email'));
        if (this.loggedUser == undefined) {
            this._router.navigate(['/']);
        }
        this.helloMessage();
        this.collectCompanies();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/editcompany/editcompany.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-warning{\n    margin-top: 5px;\n}\n.container {\n    margin-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editcompany/editcompany.component.html":
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://bootswatch.com/cerulean/bootstrap.min.css\">\n<div class=\"container\">\n\n  <!--top navigation bar-->\n  <div class=\"nav\">\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <div class=\"pull-left\">\n            <a class=\"btn btn-warning\" [routerLink]=\"['/information', param ]\" >Cancel Edit</a>\n          </div>\n        </div>\n      </div>\n    </nav>      \n  </div>  \n\n\n    <div class=\"newentrycomponent\">\n      <!--From to add new Entry-->\n      <form class=\"form-horizontal\" #myform=\"ngForm\" (submit)=\"editCompany(myform)\">\n        <fieldset>\n          <legend>Edit {{displayOneComp.name}}</legend>\n\n          <!--display when submitted with invalid field\n          <div class=\"red\" *ngIf=\"failToSubmit\">\n            <i>**Please check all red fields.</i>\n          </div>-->\n\n          <!--Company name-->\n          <div class=\"form-group\">\n            <label for=\"company\" class=\"col-lg-2 control-label\">Company:</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" name=\"company\" class=\"form-control\" placeholder=\"Agency, Employer, etc.\"\n              required\n              [(ngModel)]=\"displayOneComp.name\"\n              #company=\"ngModel\">  \n              <div class=\"red\" *ngIf=\"company.errors && (company.touched || myform.submitted)\">\n                <p *ngIf=\"company.errors.required\">Company name is required.</p>\n              </div>   \n            </div> \n          </div>\n\n          <!--Position Applied-->\n          <div class=\"form-group\">\n            <label for=\"role\" class=\"col-lg-2 control-label\">Position:</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" name=\"role\" class=\"form-control\" placeholder=\"ex: Software Enginner\"\n              required\n              [(ngModel)]=\"displayOneComp.role\"\n              #role=\"ngModel\">  \n              <div class=\"red\" *ngIf=\"role.errors && (role.touched || myform.submitted)\">\n                <p *ngIf=\"role.errors.required\">Position applied is required.</p>\n              </div>     \n            </div> \n          </div>        \n          <!--Link URL-->\n          <div class=\"form-group\">\n            <label for=\"url\" class=\"col-lg-2 control-label\">Link:</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" name=\"url\" class=\"form-control\" placeholder=\"www.job.com\"\n              [(ngModel)]=\"displayOneComp.url\">     \n            </div> \n          </div>    \n          <!--Address of the company-->\n          <div class=\"form-group\">\n            <label for=\"street\" class=\"col-lg-2 control-label\">Street</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" name=\"street\" class=\"form-control\" placeholder=\"ex: 400 Main Ave.\"\n              [(ngModel)]=\"displayOneComp.address.street\"\n              #street=\"ngModel\"> \n            </div> \n          </div> \n                <!--Suite-->\n          <div class=\"form-group\">\n            <label for=\"Suite\" class=\"col-lg-2 control-label\">Office Suite:</label>\n            <div class=\"col-lg-10\">\n                <input type=\"text\" name=\"suite\" class=\"form-control\" placeholder=\"Suite #\"\n                [(ngModel)]=\"displayOneComp.address.suite\">\n            </div>\n          </div>\n                <!--City-->\n          <div class=\"form-group\">\n            <label for=\"city\" class=\"col-lg-2 control-label\">City:</label>\n            <div class=\"col-lg-10\">\n                <input type=\"text\" name=\"city\" class=\"form-control\" placeholder=\"City\"\n                [(ngModel)]=\"displayOneComp.address.city\">\n            </div>\n          </div>        \n                <!--Zip Code-->\n          <div class=\"form-group\">\n            <label for=\"zip\" class=\"col-lg-2 control-label\">Zip Code:</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" name=\"zip\" class=\"form-control\"\n              [(ngModel)]=\"displayOneComp.address.zip\"\n              >\n            </div>\n          </div>\n                <!--Choose State-->\n          <div class=\"form-group\">\n            <label for=\"state\" class=\"col-lg-2 control-label\">State:</label>\n              <div class=\"col-lg-10\">\n                <select name=\"state\" class=\"form-control\" id=\"select\"\n                [(ngModel)]=\"displayOneComp.address.state\"\n                >\n                  <option value=\"AL\">Alabama</option>\n                  <option value=\"AK\">Alaska</option>\n                  <option value=\"AZ\">Arizona</option>\n                  <option value=\"AR\">Arkansas</option>\n                  <option value=\"CA\">California</option>\n                  <option value=\"CO\">Colorado</option>\n                  <option value=\"CT\">Connecticut</option>\n                  <option value=\"DE\">Delaware</option>\n                  <option value=\"FL\">Florida</option>\n                  <option value=\"GA\">Georgia</option>\n                  <option value=\"HI\">Hawaii</option>\n                  <option value=\"ID\">Idaho</option>\n                  <option value=\"IL\">Illinois</option>\n                  <option value=\"IN\">Indiana</option>\n                  <option value=\"IA\">Iowa</option>\n                  <option value=\"KS\">Kansas</option>\n                  <option value=\"KY\">Kentucky</option>\n                  <option value=\"LA\">Louisiana</option>\n                  <option value=\"ME\">Maine</option>\n                  <option value=\"MD\">Maryland</option>\n                  <option value=\"MA\">Massachusetts</option>\n                  <option value=\"MI\">Michigan</option>\n                  <option value=\"MN\">Minnesota</option>\n                  <option value=\"MS\">Mississippi</option>\n                  <option value=\"MO\">Missouri</option>\n                  <option value=\"MT\">Montana</option>\n                  <option value=\"NE\">Nebraska</option>\n                  <option value=\"NV\">Nevada</option>\n                  <option value=\"NH\">New Hampshire</option>\n                  <option value=\"NJ\">New Jersey</option>\n                  <option value=\"NM\">New Mexico</option>\n                  <option value=\"NY\">New York</option>\n                  <option value=\"NC\">North Carolina</option>\n                  <option value=\"ND\">North Dakota</option>\n                  <option value=\"OH\">Ohio</option>\n                  <option value=\"OK\">Oklahoma</option>\n                  <option value=\"OR\">Oregon</option>\n                  <option value=\"PA\">Pennsylvania</option>\n                  <option value=\"RI\">Rhode Island</option>\n                  <option value=\"SC\">South Carolina</option>\n                  <option value=\"SD\">South Dakota</option>\n                  <option value=\"TN\">Tennessee</option>\n                  <option value=\"TX\">Texas</option>\n                  <option value=\"UT\">Utah</option>\n                  <option value=\"VT\">Vermont</option>\n                  <option value=\"VA\">Virginia</option>\n                  <option value=\"WA\">Washington</option>\n                  <option value=\"WV\">West Virginia</option>\n                  <option value=\"WI\">Wisconsin</option>\n                  <option value=\"WY\">Wyoming</option>\n                </select> \n              </div> \n          </div>\n\n            <!--Application Status-->\n          <div class=\"form-group\">\n            <label for=\"status\" class=\"col-lg-2 control-label\">Application Status:</label>\n              <div class=\"col-lg-10\">\n                <select name=\"status\" class=\"form-control\" id=\"select\"\n                required\n                [(ngModel)]=\"displayOneComp.status\"\n                #status=\"ngModel\">\n                  <option value=\"Contacted\">Contacted</option>\n                  <option value=\"Applied\">Applied</option>\n                  <option value=\"Interview Set\">Interview Set</option>\n                  <option value=\"Interviewed\">Interviewed</option>\n                  <option value=\"Rejected\">Rejected</option>\n                </select>\n                <div class=\"red\" *ngIf=\"status.errors && (status.touched || myform.submitted)\">\n                  <p>Please make a selection</p>\n                </div>\n              </div>  \n          </div>\n\n          <!--Notes about the Company-->\n          <div class=\"form-group\">\n            <label for=\"notes\" class=\"col-lg-2 control-label\">Notes:</label>\n            <div class=\"col-lg-10\">\n              <textarea name=\"notes\" cols=\"30\" rows=\"10\" class=\"form-control\" placeholder=\"Enter notes about this job.\"\n              [(ngModel)]=\"displayOneComp.notes\"\n              ></textarea>    \n            </div> \n          </div>         \n\n          <legend>Contact Information</legend>\n          <!--Contact Name-->\n          <div class=\"form-group\"> \n            <label for=\"contact\" class=\"col-lg-2 control-label\">Contact Person:</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" name=\"contact_name\" class=\"form-control\" placeholder=\"Recruiter, Hiring Manager, etc.\"\n              required\n              [(ngModel)]=\"displayOneComp.contact.contact_name\"\n              #contact_name = \"ngModel\">\n              <div class=\"red\" *ngIf=\"contact_name.errors && (contact_name.touched || myform.submitted)\">\n                <p>Please enter your contact person's name</p>\n              </div>\n            </div>\n          </div>\n\n          <!--Contact Phone-->\n          <div class=\"form-group\"> \n            <label for=\"phone\" class=\"col-lg-2 control-label\">Phone::</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" name=\"phone\" class=\"form-control\" placeholder=\"888-888-8888\"\n              [(ngModel)]=\"displayOneComp.contact.phone\"\n              >\n            </div>\n          </div>\n\n          <!--Contact Email-->\n          <div class=\"form-group\"> \n            <label for=\"contact\" class=\"col-lg-2 control-label\">Email:</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" name=\"contact_email\" class=\"form-control\" placeholder=\"contact@company.com\"\n              pattern = \"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\"\n              [(ngModel)]=\"displayOneComp.contact.contact_email\"\n              #contact_email = \"ngModel\">\n              <div class=\"red\" *ngIf=\"contact_email.errors && contact_email.touched\">\n                <p *ngIf=\"contact_email.errors.pattern\">Please enter a valid email address</p>\n              </div>\n            </div>\n          </div>                    \n\n          <!--linkedIn-->\n          <div class=\"form-group\">\n            <label for=\"linkedin\" class=\"col-lg-2 control-label\">Contact linkedIn:</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" name=\"linkedin\" class=\"form-control\" placeholder=\"**optional\"\n              [(ngModel)]=\"displayOneComp.contact.linkedin\"\n              >     \n            </div> \n          </div>   \n\n          <!--Notes-->\n          <div class=\"form-group\">\n            <label for=\"notes\" class=\"col-lg-2 control-label\">Notes:</label>\n            <div class=\"col-lg-10\">\n              <textarea name=\"note\" cols=\"30\" rows=\"10\" class=\"form-control\" placeholder=\"Notes about the contact person\"\n              [(ngModel)]=\"displayOneComp.contact.note\"\n              ></textarea>    \n            </div> \n          </div> \n\n          <!--Submit Button-->\n          <div class=\"form-group\" style=\"text-align:center;\">\n            <button [disabled]=\"!myform.form.valid\"  type=\"submit\" class=\"btn btn-success\" style=\"text-align:center\">Save Changes</button>\n          </div>\n        </fieldset>\n      </form>\n      <!--End Form-->\n    </div>\n\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/editcompany/editcompany.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditcompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditcompanyComponent = (function () {
    function EditcompanyComponent(_cookieService, _router, _http, _activatedRoute) {
        this._cookieService = _cookieService;
        this._router = _router;
        this._http = _http;
        this._activatedRoute = _activatedRoute;
    }
    EditcompanyComponent.prototype.showOneCompany = function (id) {
        var _this = this;
        console.log("This is the showOneCompany()");
        this._http.findCompany(id)
            .then(function (data) {
            console.log("Finding company...");
            console.log("company data:", data);
            _this.displayOneComp = data;
        })
            .catch(function (err) {
            console.log("Error fetching company by ID");
        });
    };
    EditcompanyComponent.prototype.editCompany = function (form) {
        var _this = this;
        console.log('reached editCompany()');
        this._http.editCompany(this.param, this.displayOneComp)
            .then(function (data) {
            console.log('COMPANY EDITED!');
            _this._router.navigate(['/information', _this.param]);
        })
            .catch(function (error) {
            console.log("company edit failed :'(", error);
        });
    };
    EditcompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this._cookieService.get("email")) {
            this._router.navigate(['/']);
        }
        this._activatedRoute.params.subscribe(function (param) {
            _this.param = param.dog;
            _this.showOneCompany(_this.param); // <- passing global var
            console.log(param.dog);
        });
    };
    return EditcompanyComponent;
}());
EditcompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editcompany',
        template: __webpack_require__("../../../../../src/app/editcompany/editcompany.component.html"),
        styles: [__webpack_require__("../../../../../src/app/editcompany/editcompany.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], EditcompanyComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=editcompany.component.js.map

/***/ }),

/***/ "../../../../../src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, input) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el) {
                return el.toString().toLowerCase().indexOf(this.filter.toString().toLowerCase()) > -1;
            });
        }
        return value;
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    //CRUD! talk to back end:
    /* USERS */
    //add user to db
    HttpService.prototype.addUser = function (user) {
        console.log('reached http/addUser - ', user);
        return this._http.post('/new_user', user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    // //find user by email
    // {email: ""}
    HttpService.prototype.findUser = function (email) {
        console.log('reached http/findUser()');
        console.log(email);
        return this._http.post('/user', email)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    /* COMPANIES */
    //add new company to db
    HttpService.prototype.addCompany = function (company) {
        console.log('reached http/addCompany - ', company);
        return this._http.post('/new_company', company)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    //find all companies
    HttpService.prototype.findAllCompanies = function (user_email) {
        console.log('reached http/findAllCompanies()');
        console.log('/companies');
        return this._http.post('/companies/', user_email)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    //find company by id - as url param
    HttpService.prototype.findCompany = function (id) {
        console.log('reached http/findCompany()');
        console.log('/company/' + id);
        return this._http.get('/company/' + id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    //edit company by id - as url param
    HttpService.prototype.editCompany = function (id, company) {
        console.log('reached http/editCOmpany()');
        console.log('/edit_company/' + id);
        return this._http.post('/edit_company/' + id, company)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.deleteCompany = function (id) {
        console.log("reached the http.service deleteCompany()");
        return this._http.get('/delete_company/' + id)
            .map(function (data) {
            data.json();
        })
            .toPromise();
    };
    //weather api
    HttpService.prototype.weatherAPI = function (address) {
        console.log("This is the weatherAPI()");
        var weatherURL = "http://api.openweathermap.org/data/2.5/weather?zip=" + address.zip + ",us&appid=e06f6de032117e0a2698105710b12b35";
        console.log(weatherURL);
        return this._http.get(weatherURL)
            .map(function (data) { return data.json(); }).toPromise();
    };
    //maps api
    HttpService.prototype.googleAPI = function (address) {
        console.log('entered retreive');
        var url = "http://maps.google.com/maps/api/geocode/json?address=" + address.street + "+" + address.city + ",+" + address.state;
        console.log(url);
        return this._http.get(url).map(function (data) { return data.json(); }).toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nh1 {\n    margin-bottom: 50px;\n}\n.form-horizontal {\n    background-color: mintcream;\n    padding: 25px;\n    border-radius: 25px;\n}\n.red {\n    color: red;\n    font-size: 14px;\n\n}\n.linktoregister {\n    margin-top: 40px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://bootswatch.com/cerulean/bootstrap.min.css\">\n\n<div class=\"container\" style=\"text-align:center\">\n  <h1>Welcome to our App!</h1>\n  <div class=\"loginform\">\n    <form class=\"form-horizontal\" #myform=\"ngForm\" (submit)=\"login(myform)\">\n      <fieldset>\n        <legend>Login Here</legend>\n\n        <div class=\"red\" *ngIf=\"invalidPass\">\n          <p>Invalid Password. Please try again.</p>\n        </div>\n      \n        <!--Username-->\n        <div class=\"form-group\">\n          <label for=\"email\" class=\"col-lg-2 control-label\">Email:</label>\n          <div class=\"col-lg-10\">\n            <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"your@email.com\"\n            required\n            [(ngModel)]=\"userLogging.email\"\n            #email=\"ngModel\">\n          </div>\n            <div class=\"red\" *ngIf=\"email.errors && ( email.touched || myform.submitted )\">\n              <p *ngIf=\"email.errors.required\">Email is required</p>\n            </div>\n        </div> \n\n        <!--Password-->\n        <div class=\"form-group\">\n          <label for=\"password\" class=\"col-lg-2 control-label\">Password</label>\n          <div class=\"col-lg-10\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Please enter your password\"\n            required\n            [(ngModel)]=\"userLogging.password\"\n            #password=\"ngModel\">\n          </div>\n            <div class=\"red\" *ngIf=\"password.errors && ( password.touched || myform.submitted )\">\n              <p *ngIf=\"password.errors.required\">Password is required</p>\n            </div>\n        </div> \n          <button type=\"submit\" class=\"btn btn-success\">Login</button>   \n\n          <!--If user is not registered-->\n          <div class=\"linktoregister\">\n            <h4>Not registered?</h4>\n            <h5>Register \n            <a [routerLink]=\"['/register']\">here</a>\n            </h5>\n          </div> \n      </fieldset>\n    </form>\n  </div>\n</div>  "

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_cookieService, _http, _router) {
        this._cookieService = _cookieService;
        this._http = _http;
        this._router = _router;
        this.userLogging = {
            email: "",
            password: ""
        };
        this.invalidPass = false;
        this.userNotInDatabase = false;
    }
    // Check if user exists in the database
    // searchifUserExist(form){
    //   console.log("checking if user exist in the database");
    //   this._http.findUser({email: this.userLogging.email})
    //   .then(data=>{
    //     console.log("data from searchExists:", data)
    //   })
    //   .catch(err=>{
    //     console.log("User does not exist, cannot login")
    //   })
    //   form.resetForm();
    // }
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log("Reached login() in the login.comp");
        var email = { email: this.userLogging.email };
        var pass = "";
        console.log(email);
        this._http.findUser(email)
            .then(function (data) {
            console.log("Found:", data);
            pass = data.password;
            if (pass == _this.userLogging.password) {
                _this._cookieService.put("email", _this.userLogging.email);
                console.log('!!!');
                _this._router.navigate(['/homepage']);
            }
            else {
                console.log(":( password invalid");
                _this.invalidPass = true;
            }
        })
            .catch(function (err) {
            console.log("Error finding user by email");
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        console.log("In the login component. Cookie is: ", this._cookieService.get("email"));
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/newentry/newentry.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.form-horizontal, newentrycomponent {\n    display: inline-block;\n    margin-top: 50px;\n    width: 60%;\n}\n.dashboardcomponent {\n    margin-top: 30px;\n    margin-bottom: 30px;\n}\nlegend {\n    margin-top: 20px;\n}\n.red {\n    color: red;\n    font-size: 14px;\n    margin-top: 5px;\n}\n.pull-left {\n    margin-top: 5px;\n}\n.nav {\n    margin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/newentry/newentry.component.html":
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://bootswatch.com/cerulean/bootstrap.min.css\">\n<div class=\"container\">\n\n  <!--top navigation bar-->\n  <div class=\"nav\">\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <div class=\"pull-left\">\n            <a class=\"btn btn-success\" [routerLink]=\"['/homepage']\" >Back to Dashboard</a>\n          </div>\n        </div>\n      </div>\n    </nav>      \n  </div>  \n\n\n    <div class=\"newentrycomponent\">\n      <!--From to add new Entry-->\n      <form class=\"form-horizontal\" #myform=\"ngForm\" (submit)=\"addCompany(myform)\">\n        <fieldset>\n          <legend>Add New Job Entry</legend>\n\n          <!--display when submitted with invalid field\n          <div class=\"red\" *ngIf=\"failToSubmit\">\n            <i>**Please check all red fields.</i>\n          </div>-->\n\n          <!--Company name-->\n          <div class=\"form-group\">\n            <label for=\"company\" class=\"col-lg-2 control-label\">Company:</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" name=\"company\" class=\"form-control\" placeholder=\"Agency, Employer, etc.\"\n              required\n              [(ngModel)]=\"newCompany.name\"\n              #company=\"ngModel\">  \n              <div class=\"red\" *ngIf=\"company.errors && (company.touched || myform.submitted)\">\n                <p *ngIf=\"company.errors.required\">Company name is required.</p>\n              </div>   \n            </div> \n          </div>\n\n          <!--Position Applied-->\n          <div class=\"form-group\">\n            <label for=\"role\" class=\"col-lg-2 control-label\">Position:</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" name=\"role\" class=\"form-control\" placeholder=\"ex: Software Enginner\"\n              required\n              [(ngModel)]=\"newCompany.role\"\n              #role=\"ngModel\">  \n              <div class=\"red\" *ngIf=\"role.errors && (role.touched || myform.submitted)\">\n                <p *ngIf=\"role.errors.required\">Position applied is required.</p>\n              </div>     \n            </div> \n          </div>        \n          <!--Link URL-->\n          <div class=\"form-group\">\n            <label for=\"url\" class=\"col-lg-2 control-label\">Link:</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" name=\"url\" class=\"form-control\" placeholder=\"www.job.com\"\n              [(ngModel)]=\"newCompany.url\">     \n            </div> \n          </div>    \n          <!--Address of the company-->\n          <div class=\"form-group\">\n            <label for=\"street\" class=\"col-lg-2 control-label\">Street</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" name=\"street\" class=\"form-control\" placeholder=\"ex: 400 Main Ave.\"\n              [(ngModel)]=\"newCompany.street\"\n              #street=\"ngModel\"> \n            </div> \n          </div> \n                <!--Suite-->\n          <div class=\"form-group\">\n            <label for=\"Suite\" class=\"col-lg-2 control-label\">Office Suite:</label>\n            <div class=\"col-lg-10\">\n                <input type=\"text\" name=\"suite\" class=\"form-control\" placeholder=\"Suite #\"\n                [(ngModel)]=\"newCompany.suite\">\n            </div>\n          </div>\n                <!--City-->\n          <div class=\"form-group\">\n            <label for=\"city\" class=\"col-lg-2 control-label\">City:</label>\n            <div class=\"col-lg-10\">\n                <input type=\"text\" name=\"city\" class=\"form-control\" placeholder=\"City\"\n                [(ngModel)]=\"newCompany.city\">\n            </div>\n          </div>        \n                <!--Zip Code-->\n          <div class=\"form-group\">\n            <label for=\"zip\" class=\"col-lg-2 control-label\">Zip Code:</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" name=\"zip\" class=\"form-control\"\n              [(ngModel)]=\"newCompany.zip\"\n              >\n            </div>\n          </div>\n                <!--Choose State-->\n          <div class=\"form-group\">\n            <label for=\"state\" class=\"col-lg-2 control-label\">State:</label>\n              <div class=\"col-lg-10\">\n                <select name=\"state\" class=\"form-control\" id=\"select\"\n                [(ngModel)]=\"newCompany.state\"\n                >\n                  <option value=\"AL\">Alabama</option>\n                  <option value=\"AK\">Alaska</option>\n                  <option value=\"AZ\">Arizona</option>\n                  <option value=\"AR\">Arkansas</option>\n                  <option value=\"CA\">California</option>\n                  <option value=\"CO\">Colorado</option>\n                  <option value=\"CT\">Connecticut</option>\n                  <option value=\"DE\">Delaware</option>\n                  <option value=\"FL\">Florida</option>\n                  <option value=\"GA\">Georgia</option>\n                  <option value=\"HI\">Hawaii</option>\n                  <option value=\"ID\">Idaho</option>\n                  <option value=\"IL\">Illinois</option>\n                  <option value=\"IN\">Indiana</option>\n                  <option value=\"IA\">Iowa</option>\n                  <option value=\"KS\">Kansas</option>\n                  <option value=\"KY\">Kentucky</option>\n                  <option value=\"LA\">Louisiana</option>\n                  <option value=\"ME\">Maine</option>\n                  <option value=\"MD\">Maryland</option>\n                  <option value=\"MA\">Massachusetts</option>\n                  <option value=\"MI\">Michigan</option>\n                  <option value=\"MN\">Minnesota</option>\n                  <option value=\"MS\">Mississippi</option>\n                  <option value=\"MO\">Missouri</option>\n                  <option value=\"MT\">Montana</option>\n                  <option value=\"NE\">Nebraska</option>\n                  <option value=\"NV\">Nevada</option>\n                  <option value=\"NH\">New Hampshire</option>\n                  <option value=\"NJ\">New Jersey</option>\n                  <option value=\"NM\">New Mexico</option>\n                  <option value=\"NY\">New York</option>\n                  <option value=\"NC\">North Carolina</option>\n                  <option value=\"ND\">North Dakota</option>\n                  <option value=\"OH\">Ohio</option>\n                  <option value=\"OK\">Oklahoma</option>\n                  <option value=\"OR\">Oregon</option>\n                  <option value=\"PA\">Pennsylvania</option>\n                  <option value=\"RI\">Rhode Island</option>\n                  <option value=\"SC\">South Carolina</option>\n                  <option value=\"SD\">South Dakota</option>\n                  <option value=\"TN\">Tennessee</option>\n                  <option value=\"TX\">Texas</option>\n                  <option value=\"UT\">Utah</option>\n                  <option value=\"VT\">Vermont</option>\n                  <option value=\"VA\">Virginia</option>\n                  <option value=\"WA\">Washington</option>\n                  <option value=\"WV\">West Virginia</option>\n                  <option value=\"WI\">Wisconsin</option>\n                  <option value=\"WY\">Wyoming</option>\n                </select> \n              </div> \n          </div>\n\n            <!--Application Status-->\n          <div class=\"form-group\">\n            <label for=\"status\" class=\"col-lg-2 control-label\">Application Status:</label>\n              <div class=\"col-lg-10\">\n                <select name=\"status\" class=\"form-control\" id=\"select\"\n                required\n                [(ngModel)]=\"newCompany.status\"\n                #status=\"ngModel\">\n                  <option value=\"Contacted\">Contacted</option>\n                  <option value=\"Applied\">Applied</option>\n                  <option value=\"Interview Set\">Interview Set</option>\n                  <option value=\"Interviewed\">Interviewed</option>\n                  <option value=\"Rejected\">Rejected</option>\n                </select>\n                <div class=\"red\" *ngIf=\"status.errors && (status.touched || myform.submitted)\">\n                  <p>Please make a selection</p>\n                </div>\n              </div>  \n          </div>\n\n          <!--Notes about the Company-->\n          <div class=\"form-group\">\n            <label for=\"notes\" class=\"col-lg-2 control-label\">Notes:</label>\n            <div class=\"col-lg-10\">\n              <textarea name=\"notes\" cols=\"30\" rows=\"10\" class=\"form-control\" placeholder=\"Enter notes about this job.\"\n              [(ngModel)]=\"newCompany.notes\"\n              ></textarea>    \n            </div> \n          </div>         \n\n          <legend>Contact Information</legend>\n          <!--Contact Name-->\n          <div class=\"form-group\"> \n            <label for=\"contact\" class=\"col-lg-2 control-label\">Contact Person:</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" name=\"contact_name\" class=\"form-control\" placeholder=\"Recruiter, Hiring Manager, etc.\"\n              required\n              [(ngModel)]=\"newCompany.contact_name\"\n              #contact_name = \"ngModel\">\n              <div class=\"red\" *ngIf=\"contact_name.errors && (contact_name.touched || myform.submitted)\">\n                <p>Please enter your contact person's name</p>\n              </div>\n            </div>\n          </div>\n\n          <!--Contact Phone-->\n          <div class=\"form-group\"> \n            <label for=\"phone\" class=\"col-lg-2 control-label\">Phone::</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" name=\"phone\" class=\"form-control\" placeholder=\"888-888-8888\"\n              [(ngModel)]=\"newCompany.phone\"\n              >\n            </div>\n          </div>\n\n          <!--Contact Email-->\n          <div class=\"form-group\"> \n            <label for=\"contact\" class=\"col-lg-2 control-label\">Email:</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" name=\"contact_email\" class=\"form-control\" placeholder=\"contact@company.com\"\n              pattern = \"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\"\n              [(ngModel)]=\"newCompany.contact_email\"\n              #contact_email = \"ngModel\">\n              <div class=\"red\" *ngIf=\"contact_email.errors && contact_email.touched\">\n                <p *ngIf=\"contact_email.errors.pattern\">Please enter a valid email address</p>\n              </div>\n            </div>\n          </div>                    \n\n          <!--linkedIn-->\n          <div class=\"form-group\">\n            <label for=\"linkedin\" class=\"col-lg-2 control-label\">Contact linkedIn:</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" name=\"linkedin\" class=\"form-control\" placeholder=\"**optional\"\n              [(ngModel)]=\"newCompany.linkedin\"\n              >     \n            </div> \n          </div>   \n\n          <!--Notes-->\n          <div class=\"form-group\">\n            <label for=\"notes\" class=\"col-lg-2 control-label\">Notes:</label>\n            <div class=\"col-lg-10\">\n              <textarea name=\"note\" cols=\"30\" rows=\"10\" class=\"form-control\" placeholder=\"Notes about the contact person\"\n              [(ngModel)]=\"newCompany.note\"\n              ></textarea>    \n            </div> \n          </div> \n\n          <!--Submit Button-->\n          <div class=\"form-group\" style=\"text-align:center;\">\n            <button [disabled]=\"!myform.form.valid\"  type=\"submit\" class=\"btn btn-primary\" style=\"text-align:center\">Submit</button>\n          </div>\n        </fieldset>\n      </form>\n      <!--End Form-->\n    </div>\n\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/newentry/newentry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__company__ = __webpack_require__("../../../../../src/app/company.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewentryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewentryComponent = (function () {
    function NewentryComponent(_cookieService, _http, _router) {
        this._cookieService = _cookieService;
        this._http = _http;
        this._router = _router;
        this.loggedUserCookie = this._cookieService.get('email');
        this.newCompany = new __WEBPACK_IMPORTED_MODULE_4__company__["a" /* Company */]();
    }
    NewentryComponent.prototype.addCompany = function (form) {
        var _this = this;
        console.log("this.newCompany: ", form);
        if (!form.valid) {
            this.isFormValid = false;
            console.log("error with the new entry form");
            // this.failToSubmit = true
            return;
        }
        else {
            console.log("Adding Company:", form);
            var new_company = {
                name: this.newCompany.name,
                url: this.newCompany.url,
                role: this.newCompany.role,
                address: {
                    street: this.newCompany.street,
                    suite: this.newCompany.suite,
                    city: this.newCompany.city,
                    zip: this.newCompany.zip,
                    state: this.newCompany.state
                },
                user: this.loggedUserCookie,
                status: this.newCompany.status,
                notes: this.newCompany.notes,
                contact: {
                    contact_name: this.newCompany.contact_name,
                    linkedin: this.newCompany.linkedin,
                    contact_email: this.newCompany.contact_email,
                    phone: this.newCompany.phone,
                    note: this.newCompany.note
                }
            };
            console.log("Forced New Company:", new_company);
            this._http.addCompany(new_company)
                .then(function (data) {
                console.log("Success");
                _this._router.navigate(['/homepage']);
                form.resetForm();
            })
                .catch(function (err) {
                console.log("Error adding company");
            });
        }
    };
    NewentryComponent.prototype.ngOnInit = function () {
        // check if cookie is available, if not, redirect to login page
        console.log("newentry comp cookie:", this._cookieService.get('email'));
        if (!this._cookieService.get('email')) {
            this._router.navigate(['/']);
        }
    }; // end check
    return NewentryComponent;
}());
NewentryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-newentry',
        template: __webpack_require__("../../../../../src/app/newentry/newentry.component.html"),
        styles: [__webpack_require__("../../../../../src/app/newentry/newentry.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NewentryComponent);

var _a, _b, _c;
//# sourceMappingURL=newentry.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.form-horizontal {\n    margin-top: 50px;\n    background-color: lavender;\n    padding: 25px;\n    border-radius: 25px;  \n    \n}\nbutton {\n    margin-top: 20px;  \n}\n.red {\n    color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://bootswatch.com/cerulean/bootstrap.min.css\">\n<div class=\"container\" style=\"text-align:center\">\n  <div class=\"registration\">\n\n    <form class=\"form-horizontal\" #myform=\"ngForm\" (submit)=\"submitRegForm(myform)\">\n      <fieldset>\n        <legend>Registration</legend>\n\n              <!--If form is submitted, but invalid, display this message-->\n          <div class=\"red\" *ngIf=\"failBool\">\n            <p>Form is invalid. Please try again. </p>\n          </div>\n          <div class=\"red\" *ngIf=\"userExists\">\n            <p>User with that email already exists.</p>\n          </div>\n\n        <!--First Name-->\n        <div class=\"form-group\">\n          <label for=\"fname\" class=\"col-lg-2 control-label\">First Name:</label>\n          <div class=\"col-lg-10\">\n            <input type=\"text\" name=\"fname\" class=\"form-control\" placeholder=\"Your first name\"\n            required\n            [(ngModel)]=\"newuser.firstname\"\n            #fname=\"ngModel\">     \n          </div >\n            <div class=\"red\" *ngIf=\"fname.errors && (fname.touched || myform.submitted)\">\n              <p *ngIf=\"fname.errors.required\">This field must not be blank</p>\n            </div>\n        </div>\n\n        <!--Last Name-->\n        <div class=\"form-group\">\n          <label for=\"lname\" class=\"col-lg-2 control-label\">Last Name:</label>\n          <div class=\"col-lg-10\">\n            <input type=\"text\"  class=\"form-control\" name=\"lname\" placeholder=\"Your last name\"\n            required\n            [(ngModel)]=\"newuser.lastname\"\n            #lname=\"ngModel\">\n          </div>\n            <div class=\"red\" *ngIf=\"lname.errors && (lname.touched || myform.submitted)\">\n              <p *ngIf=\"lname.errors.required\">This field must not be blank</p>\n            </div>\n        </div>\n\n        <!--Email-->\n        <div class=\"form-group\">\n          <label for=\"email\" class=\"col-lg-2 control-label\">Email:</label>\n          <div class=\"col-lg-10\">\n            <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"your@email.com\"\n            required\n            pattern = \"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\"\n            [(ngModel)]=\"newuser.email\"\n            #email=\"ngModel\">\n          </div>\n            <div class=\"red\" *ngIf=\"email.errors && (email.touched || myform.submitted)\">\n              <p *ngIf=\"email.errors.required\">This field must not be blank</p>\n              <p *ngIf=\"email.errors.pattern\">Please enter a valid email address</p>\n            </div>\n        </div>     \n\n        <!--Password -->\n        <div class=\"form-group\">\n          <label for=\"password\" class=\"col-lg-2 control-label\">Password</label>\n          <div class=\"col-lg-10\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Must be between 8-12 characters\"\n            required\n            minlength=\"8\"\n            maxlength=\"12\"\n            [(ngModel)]=\"newuser.password\"\n            #password=\"ngModel\">\n          </div>\n            <div class=\"red\" *ngIf=\"password.errors && (password.touched || myform.submitted)\">\n              <p *ngIf=\"password.errors.required\">This field must not be blank</p>\n              <p *ngIf=\"password.errors.minlength || password.errors.maxlength\">Password should be between 8-12 characters</p>\n            </div>\n        </div>\n\n        <!--Confirm Password -->\n        <div class=\"form-group\">\n          <label for=\"confirmpw\" class=\"col-lg-2 control-label\">Confirm Password:</label>\n          <div class=\"col-lg-10\">\n            <input type=\"password\" class=\"form-control\" name=\"confirmpassword\" placeholder=\"Passwords must match\"\n            [(ngModel)]=\"newuser.confirmpassword\"\n            #confirmpassword=\"ngModel\">\n          </div>\n            <div class=\"red\" *ngIf=\"password.value !== confirmpassword.value && myform.submitted\">\n              <p>Password are not matching!</p>\n            </div>\n        </div>\n\n        <h4> Already Registered?</h4>\n        <h5>\n          <a [routerLink]=\"['/']\"> Go Back</a>\n        </h5>\n        <button  class=\"btn btn-primary\">Register!</button>      \n      </fieldset>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = (function () {
    function RegistrationComponent(_router, _cookieService, _http) {
        this._router = _router;
        this._cookieService = _cookieService;
        this._http = _http;
        this.newuser = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
        this.userExists = false;
    }
    RegistrationComponent.prototype.submitRegForm = function (form) {
        var _this = this;
        if (!form.valid || this.newuser.password !== this.newuser.confirmpassword) {
            this.invalidForm();
            return;
        }
        else {
            this._cookieService.put('email', this.newuser.email);
            console.log("the cookie is:", this._cookieService.get('email'));
            this._http.addUser(this.newuser)
                .then(function (data) {
                console.log("Created user into the database: ", _this.newuser);
            })
                .catch(function (err) {
                console.log("Error adding user who is trying to register.");
            });
            this._router.navigate(['/homepage']);
        }
    };
    // This function sets the boolean to true so we can display a div in the html
    RegistrationComponent.prototype.invalidForm = function () {
        console.log("Invalid Form, or passwords are not matching");
        this.failBool = true;
    };
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registration',
        template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _c || Object])
], RegistrationComponent);

var _a, _b, _c;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(firstname, lastname, email, password, confirmpassword) {
        if (firstname === void 0) { firstname = ""; }
        if (lastname === void 0) { lastname = ""; }
        if (email === void 0) { email = ""; }
        if (password === void 0) { password = ""; }
        if (confirmpassword === void 0) { confirmpassword = ""; }
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.confirmpassword = confirmpassword;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map