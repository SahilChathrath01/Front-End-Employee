import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { base_url_admin, base_url_employee } from 'src/app/Endpoint';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  token: any
  constructor(private http: HttpClient, private auth: AuthServiceService) {
    this.token = auth.getdata()
  }
//• • • • • • • • • • • • ADMIN_ROUTES• • • • • • • • • • • • • • • • • • • • • • • |
  Login(data: any) {
    return this.http.post(base_url_admin + "login", data,)
  }
  
  Change_Password(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "change/password", data, ({ headers: headerObj }))
  }
  Update_status(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "update/status", data, ({ headers: headerObj }))
  }

  //• • • • • • • • • • • • • • • • END• • • • • • • • • • • • • • • • • • • • • • • • • • • |
  
  change_password(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_employee + "change/password", data, ({ headers: headerObj }))
  }

}
