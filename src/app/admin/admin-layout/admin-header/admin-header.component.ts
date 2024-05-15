import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/EmployeServices/auth/auth-service.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  islogin: boolean = false
  constructor(private authservice: AuthServiceService, private router: Router) { }
  ngOnInit(): void {
    this.checklogin()
  }
  checklogin() {
    if (this.authservice.getdata() !== null) {
      this.islogin = true
    }
    else {
      this.islogin = false
    }
  }

  logout() {
    this.authservice.cleardata()
    this.router.navigateByUrl("/login")
  }
}
