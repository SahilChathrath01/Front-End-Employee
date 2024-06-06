import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServicesService } from 'src/app/EmployeServices/Employee/employee-services.service';
import { UserServiceService } from 'src/app/EmployeServices/User/user-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit {
  employees: any[] = []
  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService, private User:UserServiceService, private employe:EmployeeServicesService) { }

  searchText:any
  ngOnInit(): void {
    this.allEmployee()
  }
  allEmployee() {
    this.employe.All({}).subscribe((result: any) => {
      if (result.success) {
        this.employees = result.data
      }
      else {
        this.toastr.error(result.message)
      }
    })
  }

  change_status(employe_id: any, status: any) {
    this.User.Update_status({ _id: employe_id, status: status }).subscribe((result: any) => {
      if (result.success) {
        this.toastr.success(result.message)
        this.allEmployee()
      }
      else {
        this.toastr.error(result.message)
      }
    })
  }
  }
