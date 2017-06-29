import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NewentryComponent } from './newentry/newentry.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyinfoComponent } from './companyinfo/companyinfo.component';
import { EditcompanyComponent } from './editcompany/editcompany.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', component: LoginComponent },
  {path: "register", component:  RegistrationComponent },
  {path: "addnew", component: NewentryComponent},
  {path: "homepage", component: DashboardComponent},
  {path: "information/:cat", component: CompanyinfoComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "editcompany/:dog", component: EditcompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
