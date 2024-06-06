import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { base_url_admin,  base_url_employee } from 'src/app/Endpoint';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService {
  token: any
  constructor(private http: HttpClient, private Auth: AuthServiceService) {
    this.token = Auth.getdata()
  }
  // • • • • • • • • • • • • • • • • • Admin_xxxx_Routes• • • • • • • • • • • • • • • • •|
  register(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "register", data, ({ headers: headerObj }))
  }
  All(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "employee/All", data, ({ headers: headerObj }))
  }
  Single(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "employee/Single", data, ({ headers: headerObj }))
  }
  update_Profile(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "edit/profile", data, ({ headers: headerObj }))
  }
  EmployeeDelete(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "employee/delete", data, ({ headers: headerObj }))
  }
  SearchEmployee(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "search/employee/:key", data, ({ headers: headerObj }))
  }
  // • • • • • • • • • • • • • • • • • • • • 1xEND_xxxx899• • • • • • • • • • • • • • • • • • • • • • • • • • • |

  // • • • • • • • • • • • • • • • • • • • • •EmployeeRoutes • • • • • • • • • • • • • • • • • • • • • • | 

  all(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_employee + "all", data, ({ headers: headerObj }))
  }
  single(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_employee + "single", data, ({ headers: headerObj }))
  }

  // • • • • • • • • • • • • • • • • 2xEND_xxxx899• • • • • • • • • • • • • • • • • • • • • • • • • • • |

}
