import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdvanceServiceService } from 'src/app/EmployeServices/Advance/advance-service.service';
import { EmployeeServicesService } from 'src/app/EmployeServices/Employee/employee-services.service';
import { AuthServiceService } from 'src/app/EmployeServices/auth/auth-service.service';

@Component({
  selector: 'app-employe-advance',
  templateUrl: './employe-advance.component.html',
  styleUrls: ['./employe-advance.component.css']
})
export class EmployeAdvanceComponent implements OnInit {
  userdata: any
  singleData: any = {}
  advanceForm = new FormGroup({
    userId: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    department: new FormControl("", [Validators.required]),
    desination: new FormControl("", [Validators.required]),
    advanceSalary: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required]),
    _id: new FormControl("", [Validators.required]),
  })
  ngOnInit(): void {
    this.userdata = JSON.parse(sessionStorage.getItem('userdata') ?? '')
    this.advanceForm.patchValue({ userId: this.userdata._id})
    this.viewProfile()
  }
  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private Employee: EmployeeServicesService,
    private advance: AdvanceServiceService,
    private auth: AuthServiceService,
    private active: ActivatedRoute) { }
  employeData: any = {}
  
  viewProfile() {
    this.Employee.single({ _id: this.active.snapshot.paramMap.get('id') }).subscribe((result: any) => {
      if (result.success) {
        this.employeData = result.data
        this.advanceForm.patchValue({
          name: this.employeData?.name,
          _id: this.employeData?._id,
          email: this.employeData?.email,
          department: this.employeData?.department,
          desination: this.employeData?.designation
        })
      } else {
        this.toastr.error(result.message)
      }
    })
  }
  submit() {
    this.advance.add(this.advanceForm.value).subscribe((result: any) => {
      if (result.success) {
        this.auth.setdata(result)
        this.toastr.success(result.message)
      } else {
        this.toastr.error(result.message)
      }
    })
  }

}
