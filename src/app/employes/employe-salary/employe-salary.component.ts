import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SalaryServiceService } from 'src/app/EmployeServices/Salary/salary-service.service';

@Component({
  selector: 'app-employe-salary',
  templateUrl: './employe-salary.component.html',
  styleUrls: ['./employe-salary.component.css']
})
export class EmployeSalaryComponent implements OnInit {
  employeeId: any
  SalaryData: any = [] = []
  constructor
    (private toastr: ToastrService,
      private spinner: NgxSpinnerService,
      private salary: SalaryServiceService,
      private activeRoutes: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeId = this.activeRoutes.snapshot.paramMap.get('id')
    console.log('employeeId', this.employeeId);
    this.All(this.employeeId)
  }

  All(id:any) {
    this.salary.all({employeeId:id}).subscribe((result: any) => {
      if (result.success) {
        this.toastr.success(result.message)
        this.SalaryData = result.data
      }
      else {
        this.toastr.error(result.message)
      }
    })
  }

}
