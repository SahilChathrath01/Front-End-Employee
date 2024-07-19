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
  steper: any = 1
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private auth: AuthServiceService,
    private employee: EmployeeServicesService) { }
  multistep = new FormGroup({

    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    image: new FormControl(null, [Validators.required]),

    age: new FormControl("", [Validators.required]),
    education: new FormControl("", [Validators.required]),
    experience: new FormControl("", [Validators.required]),
    designation: new FormControl("", [Validators.required]),
    department: new FormControl("", [Validators.required]),
    Company: new FormControl("", [Validators.required]),


    accountHolder: new FormControl("", [Validators.required,]),
    bankName: new FormControl("", [Validators.required,]),
    ifscCode: new FormControl("", [Validators.required,]),
    bankBranch: new FormControl("", [Validators.required,]),
    accountNumber: new FormControl("", [Validators.required,]),
    city: new FormControl("", [Validators.required,]),
    state: new FormControl("", [Validators.required,]),
    pinCode: new FormControl("", [Validators.required,]),
    salary: new FormControl("", [Validators.required,]),
    confirmAccountNumber: new FormControl("", [Validators.required,]),


  })

  img_src(env: any) {
    this.multistep.patchValue({ image: env.target.files[0] })
  }

  submit() {
    this.spinner.show()
    console.log(this.multistep.value);
    
    if (this.multistep.value.accountNumber == this.multistep.value.confirmAccountNumber) {
      let a = new FormData()
      a.append("name", this.multistep.value?.name ?? '')
      a.append('picture', this.multistep.value.image ?? '')
      a.append("email", this.multistep.value?.email ?? '')
      a.append('password', this.multistep.value.password ?? '')
      a.append("gender", this.multistep.value?.gender ?? '')
      a.append('address', this.multistep.value.address ?? '')
      a.append("phone", this.multistep.value?.phone ?? '')
      a.append('age', this.multistep.value.age ?? '')
      a.append("education", this.multistep.value?.education ?? '')
      a.append('experience', this.multistep.value.experience ?? '')
      a.append("designation", this.multistep.value?.designation ?? '')
      a.append('department', this.multistep.value.department ?? '')
      a.append("Company", this.multistep.value?.Company ?? '')
      a.append('accountHolder', this.multistep.value.accountHolder ?? '')
      a.append("bankName", this.multistep.value?.bankName ?? '')
      a.append('ifscCode', this.multistep.value.ifscCode ?? '')
      a.append("bankBranch", this.multistep.value?.bankBranch ?? '')
      a.append('accountNumber', this.multistep.value.accountNumber ?? '')
      a.append("city", this.multistep.value?.city ?? '')
      a.append('state', this.multistep.value.state ?? '')
      a.append("pinCode", this.multistep.value?.pinCode ?? '')
      a.append('salary', this.multistep.value.salary ?? '')
      a.append('confirmAccountNumber', this.multistep.value.confirmAccountNumber ?? '')
     console.log(a);
     
      this.employee.register(a).subscribe({
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
    else {
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
