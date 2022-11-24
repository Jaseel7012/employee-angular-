import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { RouterModule,Routes } from '@angular/router';
import { ViewlistComponent } from './viewlist/viewlist.component';
const myRoute:Routes=[
{
  path:"",
  component:EmployeeloginComponent
},{
  path:"add",
  component:EmployeeAddComponent
}

]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeloginComponent,
    EmployeeAddComponent,
    ViewlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
