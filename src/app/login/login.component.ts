import { Component } from '@angular/core';
import { FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../EmployeServices/auth/auth-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserServiceService } from '../EmployeServices/User/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private Spinner: NgxSpinnerService,
    private authservice: AuthServiceService,
    private User: UserServiceService) { }

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(8)])
  })

  submit() {
    console.log(this.loginForm.value);
    this.Spinner.show()
    this.User.Login(this.loginForm.value).subscribe({
      next: ((result: any) => {
        if (result.success) {
          this.Spinner.hide()
          this.toastr.success(result.message)
          this.authservice.setdata(result)

          if (result.data.userType == 1)
            this.router.navigateByUrl("/admin-layout/dashboard")
          else
            this.router.navigateByUrl("/employe-layout/Profile-status")
        } else {
          this.toastr.error(result.message)
        }
      }),
      error: ((err: any) => {
        this.Spinner.hide()
        console.log("error ouccred", err);

      }),
      complete: (() => {
        this.Spinner.hide()
      })
    })

  }
}
