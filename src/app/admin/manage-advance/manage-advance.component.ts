import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdvanceServiceService } from 'src/app/EmployeServices/Advance/advance-service.service';
import { LeaveServiceService } from 'src/app/EmployeServices/Leave/leave-service.service';
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-manage-advance',
  templateUrl: './manage-advance.component.html',
  styleUrls: ['./manage-advance.component.css']
})
export class ManageAdvanceComponent implements OnInit {

fileName = 'AdSalary.xlsx'

ExportToData(){
  let data = document.getElementById('table_data')
  const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(data)

  const wb:XLSX.WorkBook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb,ws,'Sheet1')

  XLSX.writeFile(wb,this.fileName)
}


  advances: any[] = []
  searchText:any
  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService, private advance: AdvanceServiceService) { }
  ngOnInit(): void {
    this.All()
  }
  All() {
    this.advance.All({}).subscribe((result: any) => {
      if (result.success) {
        this.advances = result.data
      } else {
        this.toastr.error(result.message)
      }
    })
  }
  changeStatus(_id: any, status: any) {
    this.advance.Update({ _id:_id, status: status }).subscribe((result:any)=>{
      if(result.success){
        // this.toastr.success(result.message)
        this.All()
      }else{
        this.toastr.error(result.message)
      }
    })
  }

  
}
