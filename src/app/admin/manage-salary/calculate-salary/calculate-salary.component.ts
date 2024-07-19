import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServicesService } from 'src/app/EmployeServices/Employee/employee-services.service';
import { SalaryServiceService } from 'src/app/EmployeServices/Salary/salary-service.service';
import { AuthServiceService } from 'src/app/EmployeServices/auth/auth-service.service';

@Component({
  selector: 'app-calculate-salary',
  templateUrl: './calculate-salary.component.html',
  styleUrls: ['./calculate-salary.component.css']
})
export class CalculateSalaryComponent implements OnInit {
  userdata: any
  employeId:any
  constructor(
    private toastr: ToastrService,
    private active: ActivatedRoute,
    private auth: AuthServiceService,
    private spinner: NgxSpinnerService,
    private employee: EmployeeServicesService,
    private salarySlip: SalaryServiceService) { }
  calculateForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    designation: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    bSalary: new FormControl("", [Validators.required]),
    da: new FormControl("", [Validators.required]),
    hra: new FormControl("", [Validators.required]),
    pf: new FormControl("", [Validators.required]),
    haafPf: new FormControl("", [Validators.required]),
    lic: new FormControl("", [Validators.required]),
    Totalpresence: new FormControl("", [Validators.required]),
    totalday: new FormControl("", [Validators.required]),
    totalDuction: new FormControl("", [Validators.required]),
    Gsalary: new FormControl("", [Validators.required]),
    advanceSalary: new FormControl("", [Validators.required]),
    netSalary: new FormControl("", [Validators.required]),
    inHandSalary: new FormControl("", [Validators.required]),
    employeeId: new FormControl("", [Validators.required])
  })
  ngOnInit(): void {
    this.employeId = this.active.snapshot.paramMap.get('id')
    this.calculateForm.patchValue({ employeeId:this.employeId})
    console.log(this.employeId);
    this.view_Profile()
  }
 employeData: any = {}

  view_Profile() {
    console.log(this.employeData);
    this.spinner.show()
    this.employee.single({_id:this.employeId}).subscribe({
      next: ((result: any) => {
        if (result.success) {
          this.toastr.success(result.message)
          
          this.employeData = result.data
          this.calculateForm.patchValue({
            name: this.employeData.name,
            employeeId: this.employeId,
            email: this.employeData.email,
            designation:this.employeData.designation,
            bSalary:this.employeData.bSalary
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
  submit() {
    this.spinner.show()
    console.log(this.calculateForm.value);
    this.salarySlip.Add(this.calculateForm.value).subscribe({
      next: ((result: any) => {
        this.spinner.hide()
        if (result.success) {
          this.toastr.success(result.message)
          this.auth.setdata(result)
          this.calculateForm.reset()
        } else {
          this.toastr.error(result.message)
        }
      }),
      error: ((err) => {
        this.spinner.hide()
        console.log(err, "error ouccred");
      }),
      complete: (() => {
        this.spinner.hide()
      })
    })

  }
}
