import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LeaveServiceService } from 'src/app/EmployeServices/Leave/leave-service.service';

@Component({
  selector: 'app-view-leave',
  templateUrl: './view-leave.component.html',
  styleUrls: ['./view-leave.component.css']
})
export class ViewLeaveComponent implements OnInit {
  searchText:any
  userdata: any
  leavesArray: any[] = []
  ngOnInit(): void {
    this.userdata = JSON.parse(sessionStorage.getItem("userdata") ?? '')
    console.log(this.userdata._id);
    this.All(this.userdata._id)
  }
  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService, private leave: LeaveServiceService) { }
  All(id: any) {
    this.leave.all({ userId: id }).subscribe((result: any) => {
      if (result.success) {
        this.leavesArray = result.data
      }
      else {
        this.toastr.error(result.message)
      }
    })
  }

}
