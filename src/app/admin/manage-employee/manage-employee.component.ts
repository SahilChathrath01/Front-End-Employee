import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServicesService } from 'src/app/EmployeServices/Employee/employee-services.service';
import { UserServiceService } from 'src/app/EmployeServices/User/user-service.service';
import { img_url } from 'src/app/Endpoint';
import Swal from 'sweetalert2'
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit {

  img_Src(path: any) {
    return img_url + path
  }

  fileName = 'EmployeeData.xlsx';

  ExportToData() {
    let data = document.getElementById('table_data')
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data)

    const wb: XLSX.WorkBook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')

    XLSX.writeFile(wb, this.fileName)
  }

  employees: any[] = []
  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService, private User: UserServiceService, private employe: EmployeeServicesService) { }

  searchText: any
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
