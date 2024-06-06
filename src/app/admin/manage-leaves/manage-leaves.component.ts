import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LeaveServiceService } from 'src/app/EmployeServices/Leave/leave-service.service';

@Component({
  selector: 'app-manage-leaves',
  templateUrl: './manage-leaves.component.html',
  styleUrls: ['./manage-leaves.component.css']
})
export class ManageLeavesComponent implements OnInit {
  leaves: any[] = []
  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService, private leave: LeaveServiceService) { }
  searchText:any
  ngOnInit(): void {
    this.All()
  }

  All() {
    this.spinner.show()
    this.leave.All({}).subscribe({
      next: ((result: any) => {
        this.spinner.hide()
        if (result.success) {
          this.leaves = result.data
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
    this.leave.Update({ _id:id, status: status }).subscribe((result: any) => {
      if (result.success) {
        // this.toastr.success(result.message)
        this.All()
      }
       else {
        this.toastr.error(result.message)
      }
    })
  }
}
