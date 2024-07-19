import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServicesService } from 'src/app/EmployeServices/Employee/employee-services.service';
import { LeaveServiceService } from 'src/app/EmployeServices/Leave/leave-service.service';
import { AuthServiceService } from 'src/app/EmployeServices/auth/auth-service.service';

@Component({
  selector: 'app-employe-leaves',
  templateUrl: './employe-leaves.component.html',
  styleUrls: ['./employe-leaves.component.css']
})

export class EmployeLeavesComponent implements OnInit {
  // leaveId:any
  userdata: any
  // leavedata: any = {}

  leaveForm = new FormGroup({
    userId: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    department: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required]),
    fromdate: new FormControl("", [Validators.required]),
    todate: new FormControl("", [Validators.required]),
    desination: new FormControl("", [Validators.required]),
    _id: new FormControl("", [Validators.required]),
  })
  constructor(
    private toastr: ToastrService,
    private active: ActivatedRoute
    , private auth: AuthServiceService,
    
    private spinner: NgxSpinnerService,
    private leave: LeaveServiceService,
    private employee: EmployeeServicesService) { }

  ngOnInit(): void {
    this.userdata = JSON.parse(sessionStorage.getItem('userdata') ?? '')
    console.log("userId", this.userdata._id);
    this.leaveForm.patchValue({ userId: this.userdata._id, _id: this.userdata._id })
    this.ViewProfile()
  }

  ViewProfile() {
    let employeData: any = {}
    this.employee.single({ _id:this.active.snapshot.paramMap.get('id')}).subscribe((result: any) => {
      if (result.success) {
        employeData = result.data
        this.leaveForm.patchValue({
          name: employeData?.name,
          _id: this.userdata?._id,
          email: employeData?.email,
          department: employeData?.department,
          desination: employeData?.designation
        })
      } else {
        this.toastr.error(result.message)
      }
    })
  }




  submit() {
    console.log(this.leaveForm.value);

    this.leave.add(this.leaveForm.value).subscribe((result: any) => {
      if (result.success) {
        this.auth.setdata(result)
        this.toastr.success(result.message)
        this.leaveForm.reset()
      } else {
        this.toastr.error(result.message)
      }
    })

  }


}
