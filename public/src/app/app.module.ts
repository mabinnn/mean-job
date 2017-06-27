import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewentryComponent,
    DashboardComponent,
    CompanyinfoComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
        AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4kOD9AMomNP4OswtJNFTkgQtJleJSNV8'   // <-- Using my API Key
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
