import { Component, OnInit } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdvanceServiceService } from 'src/app/EmployeServices/Advance/advance-service.service';

@Component({
  selector: 'app-view-advance',
  templateUrl: './view-advance.component.html',
  styleUrls: ['./view-advance.component.css']
})
export class ViewAdvanceComponent implements OnInit {
  advances: any[] = [];
  userdata: any
  searchText: any;
  ngOnInit(): void {
    this.userdata = JSON.parse(sessionStorage.getItem("userdata") ?? '')
    console.log("userId", this.userdata._id);
    this.All(this.userdata._id)
  }
  constructor(private advance: AdvanceServiceService, private toastr: ToastrService, private spinner: NgxSpinnerService) { }
  All(id: any) {
    this.spinner.show()
    this.advance.all({ userId: id }).subscribe((result: any) => {
      if (result.success) {
        this.spinner.hide()
        this.advances = result.data
      } else {
        this.spinner.hide()
        this.toastr.error(result.message)
      }
    })
  }
}
