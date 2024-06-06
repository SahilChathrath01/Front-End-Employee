import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServicesService } from 'src/app/EmployeServices/Employee/employee-services.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
  userdata: any
  step: any = 1;

  profileform = new FormGroup({
    _id: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
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
  })
  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private employe: EmployeeServicesService,
    private router: Router) { }


  ngOnInit(): void {
    this.userdata = JSON.parse(sessionStorage.getItem('userdata') ?? '')
    this.profileform.patchValue({ _id: this.userdata._id })
    this.update_Profile()
  }

  update_Profile() {
    let employeData: any = {}
    this.spinner.show()
    this.employe.update_Profile({ _id: this.profileform.value }).subscribe({
      next: ((result: any) => {
        if (result.success) {
          employeData = result.data
          console.log(employeData._id);

          this.profileform.patchValue({
            name: employeData.name, 
            _id: this.userdata._id,
            email: employeData.email,
            gender: employeData.gender,
            phone: employeData.phone,
            address: employeData.address,
            age:employeData.age,
            
            department:employeData.department,
            education:employeData.education,
            experience:employeData.experience,
            designation:employeData.designation,
            hiredAddress:employeData.hiredAddress,

            accountHolder:employeData.accountHolder,
            bankName:employeData.bankName,
            bankBranch:employeData.bankBranch,
            ifscCode:employeData.ifscCode,
            accountNumber:employeData.accountNumber,
            city:employeData.city,
            state:employeData.state,
            panCard:employeData.panCard,
            pinCode:employeData.pinCode

          })
        }
        else {
          this.toastr.error(result.message)
        }
      }),
      error: ((err: any) => {
        this.spinner.hide()
        this.toastr.error(err, "Error occured", err)
      }),
      complete: (() => {
        this.spinner.hide()

      })
    })


  }
  profilesubmit() {

    this.employe.update_Profile(this.profileform.value).subscribe({
      next: ((result: any) => {
        this.spinner.hide()
        if (result.success) {
          this.toastr.success(result.message)
          this.router.navigateByUrl("/employe-layout/view-profile")
        }
        else {
          this.spinner.hide()
          this.toastr.error(result.message)
        }
      }),
      error: ((err: any) => {
        this.toastr.error("error qccured", err)
      }),
      complete: (() => {
        this.spinner.hide()
      })
    })

  }


  pervious() {
    this.step = this.step - 1
  }
  next(){
    if(this.step == 4){
      this.router.navigateByUrl("/employe-layout/attendance")
    }
    this.step = this.step + 1

  }
}

