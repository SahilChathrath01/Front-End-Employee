import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/EmployeServices/User/user-service.service';
import { AuthServiceService } from 'src/app/EmployeServices/auth/auth-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  userdata: any
  changeForm = new FormGroup({
    _id: new FormControl("", [Validators.required]),
    current_password: new FormControl("", [Validators.required]),
    new_password: new FormControl("", [Validators.required]),
    conformPassword: new FormControl("", [Validators.required])
  })

  constructor
    (private toastr: ToastrService,
      private router: Router,
      private spinner: NgxSpinnerService,
      private User: UserServiceService,
      private auth: AuthServiceService,
      ) { }

  ngOnInit(): void {
    this.userdata = JSON.parse(sessionStorage.getItem('userdata')??'')
    console.log("userId",this.userdata._id);
    this.changeForm.patchValue({_id:this.userdata._id})
  }

  submit() {
    console.log(this.changeForm.value);
  
    if (this.changeForm.value.new_password == this.changeForm.value.conformPassword) {
      this.User.Change_Password(this.changeForm.value).subscribe({
        next: ((result: any) => {
          this.spinner.hide()
          if (result.success) {
            this.toastr.success(result.message)
            this.changeForm.reset()
            this.auth.setdata(result)
          }
          else {
            this.toastr.error(result.message)

          }
        }),
        error: ((err: any) => {
          this.spinner.hide()
          this.toastr.error("ERROR QCCURED", err)

        }),
        complete: (() => {
          this.spinner.hide()

        })
      })
    }
    else {
      this.toastr.error('New password & Confirm Passwords Does not match')
    }

  }
}
