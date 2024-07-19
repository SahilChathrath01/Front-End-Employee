import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  employeeId:any
  searchText: any;
  constructor(private toastr: ToastrService, private active :ActivatedRoute,private spinner: NgxSpinnerService, private attendance: AttdendanceServiceService) { }
  ngOnInit(): void {
    this.employeeId = this.active.snapshot.paramMap.get('id')
    console.log("userId", this.employeeId);
    this.All(this.employeeId)
  }
  All(id: any) {
    this.attendance.all({ employeeId: id }).subscribe((result: any) => {
      if (result.success) {
        this.Attendance = result.data
      } else {
        this.toastr.error(result.message)
      }
    })
  }
}
