import { Component } from '@angular/core';
import { FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../EmployeServices/auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private toastr: ToastrService, private authservice: AuthServiceService) { }
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  })

  submit() {
    // console.log(this.loginForm.value);
    if (this.loginForm.value.email == "user@gmail.com" && this.loginForm.value.password == "123") {
      this.toastr.success("login successfuly")
      this.router.navigateByUrl("/employe-layout/attendance")
      this.authservice.setdata({ token: this.loginForm.value.email })
    }

    else if (this.loginForm.value.email == "admin@gmail.com" && this.loginForm.value.password == "123") {
      this.toastr.success("login successfuly")
      this.router.navigateByUrl("/admin-layout/dashboard")
      this.authservice.setdata({ token: this.loginForm.value.email })
    }
    else {
      this.toastr.error("invalid credentials")
    }

  }
}
