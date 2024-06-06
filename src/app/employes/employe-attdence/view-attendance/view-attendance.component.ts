import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AttdendanceServiceService } from 'src/app/EmployeServices/Attdendance/attdendance-service.service';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent implements OnInit {
  Attendance: any[] = []
  userdata: any
  searchText: any;
  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService, private attendance: AttdendanceServiceService) { }
  ngOnInit(): void {
    this.userdata = JSON.parse(sessionStorage.getItem("userdata") ?? '')
    console.log("userId", this.userdata._id);
    this.All(this.userdata._id)
  }
  All(id: any) {
    this.attendance.all({ userId: id }).subscribe((result: any) => {
      if (result.success) {
        this.Attendance = result.data
      } else {
        this.toastr.error(result.message)
      }
    })
  }
}
