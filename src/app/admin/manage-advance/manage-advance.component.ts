import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdvanceServiceService } from 'src/app/EmployeServices/Advance/advance-service.service';
import { LeaveServiceService } from 'src/app/EmployeServices/Leave/leave-service.service';

@Component({
  selector: 'app-manage-advance',
  templateUrl: './manage-advance.component.html',
  styleUrls: ['./manage-advance.component.css']
})
export class ManageAdvanceComponent implements OnInit {
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
