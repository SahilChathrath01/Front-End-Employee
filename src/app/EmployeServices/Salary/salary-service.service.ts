import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { base_url, base_url_admin, base_url_employee } from 'src/app/Endpoint';
import { WindowRefService } from 'src/app/window-ref.service';
@Injectable({
  providedIn: 'root'
})
export class SalaryServiceService {
  token: any
  constructor(
    private http: HttpClient,
    private auth: AuthServiceService,
    private winRef: WindowRefService) {
    this.token = auth.getdata()
  }
  // • • • • • • • • • • • • • • • • AdminRoutes• • • • • • • • • • • • • • • • • • • • • • • • • • • |


 
  Add(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "salary/add", data, ({ headers: headerObj }))
  }
  All(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "salary/all", data, ({ headers: headerObj }))
  }
  Single(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "salary/single", data, ({ headers: headerObj }))
  }
  Update(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "salary/update", data, ({ headers: headerObj }))
  }
  Search(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "search/salary/:data", data, ({ headers: headerObj }))
  }


  // • • • • • • • • • • • • • • • • 1xEND_xxxx899• • • • • • • • • • • • • • • • • • • • • • • • • • • |
  // • • • • • • • • • • • • • • • • EmployeeRoutes• • • • • • • • • • • • • • • • • • • • • • • • • • • |
  all(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_employee + "salary/all", data, ({ headers: headerObj }))
  }
  single(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_employee + "salary/single", data, ({ headers: headerObj }))
  }
  // • • • • • • • • • • • • • • • • 1xEND_xxxx899• • • • • • • • • • • • • • • • • • • • • • • • • • • |

}
