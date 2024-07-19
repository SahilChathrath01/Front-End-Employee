import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SalaryServiceService } from 'src/app/EmployeServices/Salary/salary-service.service';
import { WindowRefService } from 'src/app/window-ref.service';
import * as XLSX  from 'xlsx'
@Component({
  selector: 'app-manage-salary',
  templateUrl: './manage-salary.component.html',
  styleUrls: ['./manage-salary.component.css']
})
export class ManageSalaryComponent implements OnInit {

  fileName = 'PayrollData.xlsx';

  ExportToData(){
    let data = document.getElementById('table_data')
    const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(data)

    const wb:XLSX.WorkBook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb,ws,'Sheet1')

    XLSX.writeFile(wb,this.fileName)
  }


  salarys: any[] = []
  searchText: any
  someData: any
  constructor(private toastr: ToastrService, private http: HttpClient, private winRef: WindowRefService, private spinner: NgxSpinnerService, private activeRoutes: ActivatedRoute, private salary: SalaryServiceService) { }

  ngOnInit(): void { this.All() }

  All() {
    this.spinner.show()
    this.salary.All({}).subscribe({
      next: ((result: any) => {
        this.spinner.hide()
        if (result.success) {
          this.salarys = result.data
        } else {
          this.toastr.error(result.message)
        }
      }),
      error: ((err) => {
        console.log(err, "Error Ouccred");
        this.spinner.hide()
      }),
      complete: (() => {
        this.spinner.hide()
      })
    })
  }


  changeStatus(id: any, status: any) {
    this.salary.Update({ _id: id, status: status }).subscribe((result: any) => {
      if (result.success) {
        this.All()
      } else {
        this.toastr.error(result.message)
      }
    })
  }

  createRzpayOrder(someData: any) {

    console.log("helo");

    const postData: any = {}

    this.http.post<any>('http://localhost:5000/createOrder', someData).subscribe((response) => {
      console.log("response", response);
      console.log(someData, "data of somedata");

      const order_id = response.orderId;

      this.payWithRazor(order_id)
    },
      (error) => {
        console.error("Error created order: ", error);
      }
    )
  }
  payWithRazor(val: any) {
    const options: any = {
      key: 'rzp_test_zFBMTm4L2hhnbc',
      amount: '100000000',
      currency: 'INR',
      name: 'Rajput',
      description: 'Dome With Razorpay',
      image: '',
      order_id: val,
      modal: {
        escape: false
      },
      notes: {

      },
      theme: {
        color: "#0c238a"
      },
    };
    options.handler = (response: any, error: any) => {
      options.response = response;
      console.log(response);
      console.log(options);
    }
    
    options.modal.ondismiss = () => {
      console.log("Transaction cancelled");
    }
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();

  }


}
