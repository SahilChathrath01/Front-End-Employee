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
import { CalculateSalaryComponent } from './admin/manage-salary/calculate-salary/calculate-salary.component';
import { UpdateProfileComponent } from './employes/update-profile/update-profile.component';
import { ViewLeaveComponent } from './employes/employe-leaves/view-leave/view-leave.component';
import { ViewAdvanceComponent } from './employes/employe-advance/view-advance/view-advance.component';
import { ViewAttendanceComponent } from './employes/employe-attdence/view-attendance/view-attendance.component';
import { guardGuard } from './employes/Guard/guard.guard';
import { adminGuardGuard } from './admin/GUARD/admin-guard.guard';
import { ProfilestatusComponent } from './employes/view-profile/profilestatus/profilestatus.component';

const routes: Routes = [
  {path: "",redirectTo:'/login',pathMatch:'full'},
  {path:'employe-layout',component:EmployLayoutComponent,canActivate:[guardGuard], children:[
    {path:'view-attendance/:id',component:ViewAttendanceComponent},
    {path:'leaves/:id',component:EmployeLeavesComponent},
    {path:'view-leave',component:ViewLeaveComponent},
    {path:'advance/:id',component:EmployeAdvanceComponent},
    {path:'view-advance',component:ViewAdvanceComponent},
    {path:'salary/:id',component:EmployeSalaryComponent},
    {path:'view-profile',component:ViewProfileComponent},
    {path:'Profile-status',component:ProfilestatusComponent},
    {path:"update-profile",component:UpdateProfileComponent},
    {path:'change-password',component:ChangePasswordComponent}
  ]},

  {path:'admin-layout',component:AdminLayoutComponent, canActivate:[adminGuardGuard],children:[
    {path:"dashboard",component:DashboardComponent},
    {path:'manage-attendance',component:ManageAttendanceComponent},
    {path:'attendance/:id',component:EmployeAttdenceComponent},
    {path:'manage-leaves',component:ManageLeavesComponent},
    {path:'manage-advance',component:ManageAdvanceComponent},
    {path:'manage-salary',component:ManageSalaryComponent},
    {path:'manage-view-profile',component:ViewProfileComponent},
    {path:'manage-employe',component:ManageEmployeeComponent},
    {path:"update-profile/:id",component:UpdateProfileComponent},
    {path:'manage-change-password',component:ChangePasswordComponent},
    {path:'add-employee',component:AddEmployeeComponent},
    {path:'calculate-salary/:id',component:CalculateSalaryComponent}

  ]},
   {path:'login',component:LoginComponent},
   {path:'**',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
