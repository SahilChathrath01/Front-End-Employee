import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DashboardServiceService } from 'src/app/EmployeServices/Dashboard/dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashData: any = {}
  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService, private dashboard1: DashboardServiceService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll() {
    this.spinner.show()
    this.dashboard1.dashboard({}).subscribe({
      next: ((result: any) => {
        this.spinner.hide()
        if (result.success) {
          this.dashData = result
        } else {
          this.toastr.error(result.message)
        }
      }),
      error: ((err) => {
        console.log(err, "error ouccred");
        this.spinner.hide()
      }),
      complete: (() => {
        this.spinner.hide()
      })
    })
  }

}
