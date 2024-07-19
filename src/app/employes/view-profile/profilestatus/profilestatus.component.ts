import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServicesService } from 'src/app/EmployeServices/Employee/employee-services.service';
import { img_url } from 'src/app/Endpoint';

@Component({
  selector: 'app-profilestatus',
  templateUrl: './profilestatus.component.html',
  styleUrls: ['./profilestatus.component.css']
})
export class ProfilestatusComponent implements OnInit {
  path_Img(path: any) {
    return img_url + path
  }
  SingleData: any = {}
  AllData: any[] = []
  userdata: any
  constructor
    (private employe: EmployeeServicesService,
      private toastr: ToastrService,
      private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.userdata = JSON.parse(sessionStorage.getItem('userdata') ?? '')
    console.log("userId", this.userdata._id);
    // this.SingleEmployee()
    this.All(this.userdata._id)
  }

  All(id: any) {
    this.spinner.show()
    this.employe.all({ userId: id }).subscribe((result: any) => {
      if (result.success) {
        this.AllData = result.data
        // this.toastr.success(result.message)
      } else {
        this.toastr.error(result.message)
      }
    })
  }


  SingleEmployee() {
    this.spinner.show()
    this.employe.single({ _id: this.userdata._id }).subscribe({
      next: ((result: any) => {
        this.spinner.hide()
        if (result.success) {
          this.toastr.success(result.message)
          this.SingleData = result.data
          console.log("userdata", this.SingleData);

        }
        else {
          this.toastr.error(result.message)
        }
      }),
      error: ((err) => {
        this.spinner.hide()
        console.log(err, "error Occured");

      }),
      complete: (() => {
        this.spinner.hide()

      })
    })
  }
}
