import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServicesService } from 'src/app/EmployeServices/Employee/employee-services.service';
import { AuthServiceService } from 'src/app/EmployeServices/auth/auth-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor(private router: Router, private toastr: ToastrService, private spinner: NgxSpinnerService, private auth: AuthServiceService, private employee: EmployeeServicesService) { }

  steper: any = 1
  multistep = new FormGroup({

    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),

    age: new FormControl("", [Validators.required]),
    education: new FormControl("", [Validators.required]),
    experience: new FormControl("", [Validators.required]),
    designation: new FormControl("", [Validators.required]),
    department: new FormControl("", [Validators.required]),
    hiredAddress: new FormControl("", [Validators.required]),


    accountHolder: new FormControl("", [Validators.required,]),
    bankName: new FormControl("", [Validators.required,]),
    ifscCode: new FormControl("", [Validators.required,]),
    bankBranch: new FormControl("", [Validators.required,]),
    accountNumber: new FormControl("", [Validators.required,]),
    city: new FormControl("", [Validators.required,]),
    state: new FormControl("", [Validators.required,]),
    pinCode: new FormControl("", [Validators.required,]),
    panCard: new FormControl("", [Validators.required,]),
    confirmAccountNumber: new FormControl("", [Validators.required,]),


  })

  submit() {
    if(this.multistep.value.accountNumber == this.multistep.value.confirmAccountNumber){
      console.log(this.multistep.value);
      this.spinner.show()
      this.employee.register(this.multistep.value).subscribe({
        next: ((result: any) => {
          this.spinner.hide()
          if (result.success) {
            this.toastr.success(result.message)
            this.auth.setdata(result)
            this.router.navigateByUrl("/admin-layout/manage-employe")
          }
          else {
            this.toastr.error(result.message)
          }
        }),
        error: ((err) => {
          this.spinner.hide()
          console.log("Error Ouccred", err);
  
        }),
        complete: (() => {
          this.spinner.hide()
        })
      })
  
    }
    else{
      this.toastr.error("Confirm Account Number Is Does't Matched")
    }
 

  }

  next() {
    if (this.steper == 3) {
      this.router.navigateByUrl("/admin-layout/manage-employe")
    }
    this.steper = this.steper + 1
  }
  pervious() {
    this.steper = this.steper - 1
  }
}
