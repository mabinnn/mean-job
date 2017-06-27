import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NewentryComponent } from './newentry/newentry.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyinfoComponent } from './companyinfo/companyinfo.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', component: LoginComponent },
  {path: "register", component:  RegistrationComponent },
  {path: "homepage", component: NewentryComponent},
  {path: "information", component: CompanyinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
