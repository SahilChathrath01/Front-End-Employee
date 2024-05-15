import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployLayoutComponent } from './employes/employ-layout/employ-layout.component';
import { LoginComponent } from './login/login.component';
import { EmployeAttdenceComponent } from './employes/employe-attdence/employe-attdence.component';
import { EmployeLeavesComponent } from './employes/employe-leaves/employe-leaves.component';
import { EmployeAdvanceComponent } from './employes/employe-advance/employe-advance.component';
import { EmployeSalaryComponent } from './employes/employe-salary/employe-salary.component';
import { ViewProfileComponent } from './employes/view-profile/view-profile.component';
import { ChangePasswordComponent } from './employes/change-password/change-password.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { ManageAttendanceComponent } from './admin/manage-attendance/manage-attendance.component';
import { ManageLeavesComponent } from './admin/manage-leaves/manage-leaves.component';
import { ManageAdvanceComponent } from './admin/manage-advance/manage-advance.component';
import { ManageSalaryComponent } from './admin/manage-salary/manage-salary.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManageEmployeeComponent } from './admin/manage-employee/manage-employee.component';
import { AddEmployeeComponent } from './admin/manage-employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './admin/manage-employee/update-employee/update-employee.component';
import { CalculateSalaryComponent } from './admin/manage-salary/calculate-salary/calculate-salary.component';

const routes: Routes = [
  {path: "",redirectTo:'/login',pathMatch:'full'},
  {path:'employe-layout',component:EmployLayoutComponent, children:[
    {path:'attendance',component:EmployeAttdenceComponent},
    {path:'leaves',component:EmployeLeavesComponent},
    {path:'advance',component:EmployeAdvanceComponent},
    {path:'salary',component:EmployeSalaryComponent},
    {path:'view-profile',component:ViewProfileComponent},
    {path:'change-password',component:ChangePasswordComponent}
  ]},

  {path:'admin-layout',component:AdminLayoutComponent, children:[
    {path:"dashboard",component:DashboardComponent},
    {path:'manage-attendance',component:ManageAttendanceComponent},
    {path:'manage-leaves',component:ManageLeavesComponent},
    {path:'manage-advance',component:ManageAdvanceComponent},
    {path:'manage-salary',component:ManageSalaryComponent},
    {path:'manage-view-profile',component:ViewProfileComponent},
    {path:'manage-employe',component:ManageEmployeeComponent},
    {path:'manage-change-password',component:ChangePasswordComponent},
    {path:'add-employee',component:AddEmployeeComponent},
    {path:'update-employee',component: UpdateEmployeeComponent},
    {path:'calculate-salary',component:CalculateSalaryComponent}

  ]},
   {path:'login',component:LoginComponent},
   {path:'**',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
