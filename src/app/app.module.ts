import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployLayoutComponent } from './employes/employ-layout/employ-layout.component';
import { EmployeHeaderComponent } from './employes/employ-layout/employe-header/employe-header.component';
import { EmployeFooterComponent } from './employes/employ-layout/employe-footer/employe-footer.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeAttdenceComponent } from './employes/employe-attdence/employe-attdence.component';
import { EmployeLeavesComponent } from './employes/employe-leaves/employe-leaves.component';
import { EmployeAdvanceComponent } from './employes/employe-advance/employe-advance.component';
import { EmployeSalaryComponent } from './employes/employe-salary/employe-salary.component';
import { ChangePasswordComponent } from './employes/change-password/change-password.component';
import { ViewProfileComponent } from './employes/view-profile/view-profile.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './admin/admin-layout/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/admin-layout/admin-footer/admin-footer.component';
import { ManageEmployeeComponent } from './admin/manage-employee/manage-employee.component';
import { ManageAdvanceComponent } from './admin/manage-advance/manage-advance.component';
import { ManageLeavesComponent } from './admin/manage-leaves/manage-leaves.component';
import { ManageSalaryComponent } from './admin/manage-salary/manage-salary.component';
import { ManageAttendanceComponent } from './admin/manage-attendance/manage-attendance.component';
import { AddEmployeeComponent } from './admin/manage-employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './admin/manage-employee/update-employee/update-employee.component';

// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { CalculateSalaryComponent } from './admin/manage-salary/calculate-salary/calculate-salary.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployLayoutComponent,
    EmployeHeaderComponent,
    EmployeFooterComponent,
    LoginComponent,
    EmployeAttdenceComponent,
    EmployeLeavesComponent,
    EmployeAdvanceComponent,
    EmployeSalaryComponent,
    ChangePasswordComponent,
    ViewProfileComponent,
    ErrorPageComponent,
    DashboardComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    ManageEmployeeComponent,
    ManageAdvanceComponent,
    ManageLeavesComponent,
    ManageSalaryComponent,
    ManageAttendanceComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    CalculateSalaryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
