import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpService } from './http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

// Importing @agm/core for Google mpas
import { AgmCoreModule } from '@agm/core';

// Importing components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewentryComponent } from './newentry/newentry.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyinfoComponent } from './companyinfo/companyinfo.component';
import { RegistrationComponent } from './registration/registration.component';
import { EditcompanyComponent } from './editcompany/editcompany.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewentryComponent,
    DashboardComponent,
    CompanyinfoComponent,
    RegistrationComponent,
    EditcompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4kOD9AMomNP4OswtJNFTkgQtJleJSNV8'   // <-- Using my API Key
    })
  ],
  providers: [HttpService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
