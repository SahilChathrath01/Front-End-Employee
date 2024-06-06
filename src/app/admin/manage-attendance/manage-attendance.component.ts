import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AttdendanceServiceService } from 'src/app/EmployeServices/Attdendance/attdendance-service.service';
import { EmployeeServicesService } from 'src/app/EmployeServices/Employee/employee-services.service';

@Component({
  selector: 'app-manage-attendance',
  templateUrl: './manage-attendance.component.html',
  styleUrls: ['./manage-attendance.component.css']
})
export class ManageAttendanceComponent implements OnInit {
  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService, private attendence: AttdendanceServiceService) { }
  Employee: any[] = []
   searchText:any
  ngOnInit(): void {
    this.All()
  }
  All() {
    this.spinner.show()
    this.attendence.All({}).subscribe({
      next: ((result: any) => {
        this.spinner.hide()
        if (result.success) {
          this.Employee = result.data
        }
        else {
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

  changeStatus(id: any, status: any) {
    this.attendence.update({ _id:id, status: status }).subscribe((result: any) => {
      if (result.success) {
        // this.toastr.success(result.message)
        this.All()
      } else {
        this.toastr.error(result.message)
      }
    })
  }
}
