import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AttdendanceServiceService } from 'src/app/EmployeServices/Attdendance/attdendance-service.service';
import { EmployeeServicesService } from 'src/app/EmployeServices/Employee/employee-services.service';
import { AuthServiceService } from 'src/app/EmployeServices/auth/auth-service.service';

@Component({
  selector: 'app-employe-attdence',
  templateUrl: './employe-attdence.component.html',
  styleUrls: ['./employe-attdence.component.css']
})
export class EmployeAttdenceComponent implements OnInit {
  userdata: any
  attdenceForm = new FormGroup({
    userId: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    department: new FormControl("", [Validators.required]),
    designation: new FormControl("", [Validators.required]),
    time: new FormControl("", [Validators.required]),
    _id:new FormControl("", [Validators.required])
    
  })
  constructor
  (private toastr: ToastrService, 
    private auth: AuthServiceService,
     private spinner: NgxSpinnerService, 
     private Employee:EmployeeServicesService,
     private attendence: AttdendanceServiceService) { }
  ngOnInit(): void {
    this.userdata = JSON.parse(sessionStorage.getItem("userdata") ?? '')
    // console.log("userId", this.userdata._id);
    this.attdenceForm.patchValue({ userId: this.userdata._id,_id:this.userdata._id })
    this.viewProfile()
  }
  viewProfile(){
    let employeData :any = {}
    this.Employee.single({_id:this.attdenceForm.value._id}).subscribe((result:any)=>{
      if(result.success){
        employeData = result.data
        this.attdenceForm.patchValue({
          name:employeData?.name, 
          email:employeData.email,
          department:employeData.department,
          designation:employeData.designation,
          _id:this.userdata._id})
      }else{
        this.toastr.error(result.message)
      }
    })
  }

  submit() {
    console.log(this.attdenceForm.value);
    
    this.attendence.add(this.attdenceForm.value).subscribe((result: any) => {
      if (result.success) {
        this.toastr.success(result.message)
        this.auth.setdata(result)
        this.attdenceForm.reset()
      }
      else {
        this.toastr.error(result.message)
      }
    })

  }


}
