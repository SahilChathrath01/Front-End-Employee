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
  employeeId: any
  userdata: any
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
    employeeId: new FormControl("", [Validators.required]),
    _id: new FormControl("", [Validators.required])
  })
  ngOnInit(): void {
    this.userdata = JSON.parse(sessionStorage.getItem('userdata') ?? '')
    this.employeeId = this.active.snapshot.paramMap.get('id')
    console.log(this.userdata);
    this.calculateForm.patchValue({ employeeId: this.employeeId, _id: this.userdata._id })
    this.viewProfile()
  }
  viewProfile() {
    let employeData: any = {}
    this.employee.Single({ _id: this.calculateForm.value._id }).subscribe((result: any) => {
      if (result.success) {
        employeData = result.data
        this.calculateForm.patchValue({ name: employeData?.name })
      } else {
        this.toastr.error(result.message)
      }
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
