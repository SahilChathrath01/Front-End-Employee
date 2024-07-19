import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    userId: new FormControl("", [Validators.required]),
    _id: new FormControl("", [Validators.required]),
    image: new FormControl("", [Validators.required]),
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
  })
  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private employe: EmployeeServicesService,
    private router: Router,
    private active: ActivatedRoute) { }


  ngOnInit(): void {
    this.profileform.patchValue({ _id: this.active.snapshot.paramMap.get('id') })
    this.View_Profile()
  }
  EmployeData: any = {}

  img_change(env: any) {
    console.log(env.image);
    this.profileform.patchValue({ image: env.target.files[0] })
  }

  View_Profile() {
    this.spinner.show()
    this.employe.single({ _id: this.profileform.value._id }).subscribe({
      next: ((result: any) => {
        if (result.success) {
          this.EmployeData = result.data
          console.log(this.EmployeData)
          this.profileform.patchValue({
            name: this.EmployeData.name,
            _id: this.active.snapshot.paramMap.get('id'),
            email: this.EmployeData.email,
            userId: this.EmployeData.userId._id,
            gender: this.EmployeData.gender,
            phone: this.EmployeData.phone,
            address: this.EmployeData.address,
            age: this.EmployeData.age,
            image: this.EmployeData.image,
            department: this.EmployeData.department,
            education: this.EmployeData.education,
            experience: this.EmployeData.experience,
            designation: this.EmployeData.designation,
            Company: this.EmployeData.Company,

            accountHolder: this.EmployeData.accountHolder,
            bankName: this.EmployeData.bankName,
            bankBranch: this.EmployeData.bankBranch,
            ifscCode: this.EmployeData.ifscCode,
            accountNumber: this.EmployeData.accountNumber,
            city: this.EmployeData.city,
            state: this.EmployeData.state,
            salary: this.EmployeData.salary,
            pinCode: this.EmployeData.pinCode

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

  // updateSubmit() {
  //   let a = new FormData()

  //   a.append('userId', this.profileform.value.userId ?? '')
  //   a.append('_id', this.profileform.value._id ?? '')
  //   a.append('name', this.profileform.value.name ?? '')
  //   a.append('email', this.profileform.value.email ?? '')
  //   a.append('gender', this.profileform.value.gender ?? '')
  //   a.append('address', this.profileform.value.address ?? '')
  //   a.append('phone', this.profileform.value.phone ?? '')
  //   a.append('age', this.profileform.value.age ?? '')
  //   a.append('education', this.profileform.value.education ?? '')
  //   a.append('experience', this.profileform.value.experience ?? '')
  //   a.append('designation', this.profileform.value.designation ?? '')
  //   a.append('department', this.profileform.value.department ?? '')
  //   a.append('Company', this.profileform.value.Company ?? '')
  //   a.append('accountHolder', this.profileform.value.accountHolder ?? '')
  //   a.append('bankName', this.profileform.value.bankName ?? '')
  //   a.append('ifscCode', this.profileform.value.ifscCode ?? '')
  //   a.append('bankBranch', this.profileform.value.bankBranch ?? '')
  //   a.append('accountNumber', this.profileform.value.accountNumber ?? '')
  //   a.append('city', this.profileform.value.city ?? '')
  //   a.append('state', this.profileform.value.state ?? '')
  //   a.append('pinCode', this.profileform.value.pinCode ?? '')
  //   a.append('salary', this.profileform.value.salary ?? '')

  //   if(!!this.profileform.value.image){
  //     a.append('picture', this.profileform.value.image ?? '')
  //   }

  //   console.log(a);


  //   this.employe.update_Profile(a).subscribe((result: any) => {
  //     if (result.success) {
  //       this.toastr.success(result.message)
  //     }
  //     else {
  //       this.toastr.error(result.message)
  //     }
  //   })

  // }

  updateSubmit() {
    let a = new FormData()
    a.append('userId', this.profileform.value.userId ?? '')
    a.append('_id', this.profileform.value._id ?? '')
    a.append('name', this.profileform.value.name ?? '')
    a.append('email', this.profileform.value.email ?? '')
    a.append('gender', this.profileform.value.gender ?? '')
    a.append('address', this.profileform.value.address ?? '')
    a.append('phone', this.profileform.value.phone ?? '')
    a.append('age', this.profileform.value.age ?? '')
    a.append('education', this.profileform.value.education ?? '')
    a.append('experience', this.profileform.value.experience ?? '')
    a.append('designation', this.profileform.value.designation ?? '')
    a.append('department', this.profileform.value.department ?? '')
    a.append('Company', this.profileform.value.Company ?? '')
    a.append('accountHolder', this.profileform.value.accountHolder ?? '')
    a.append('bankName', this.profileform.value.bankName ?? '')
    a.append('ifscCode', this.profileform.value.ifscCode ?? '')
    a.append('bankBranch', this.profileform.value.bankBranch ?? '')
    a.append('accountNumber', this.profileform.value.accountNumber ?? '')
    a.append('city', this.profileform.value.city ?? '')
    a.append('state', this.profileform.value.state ?? '')
    a.append('pinCode', this.profileform.value.pinCode ?? '')
    a.append('salary', this.profileform.value.salary ?? '')

    if (!!this.profileform.value.image) {
      a.append('picture', this.profileform.value.image ?? '')
    }

    this.employe.update_Profile(a).subscribe((result: any) => {
      if (result.success) {
        this.toastr.success("success", result.message)
      } else {
        this.toastr.error('error ouccred', result.message)
      }
    })
  }

  pervious() {
    this.step = this.step - 1
  }
  next() {
    if (this.step == 4) {
      this.router.navigateByUrl("/employe-layout/attendance")
    }
    this.step = this.step + 1

  }
}

