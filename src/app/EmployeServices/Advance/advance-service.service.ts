import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { base_url_admin, base_url_employee } from 'src/app/Endpoint';

@Injectable({
  providedIn: 'root'
})
export class AdvanceServiceService {
  token: any
  constructor(private http: HttpClient, private auth: AuthServiceService) {
    this.token = auth.getdata()
  }
  // • • • • • • • • • • • • • • • • AdminRoutes• • • • • • • • • • • • • • • • • • • • • • • • • • • |

  All(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "advance/all", data, ({ headers: headerObj }))
  }
  Single(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "advance/single", data, ({ headers: headerObj }))
  }
  Update(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "advance/update", data, ({ headers: headerObj }))
  }
  Search(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "search/advance/:key", data, ({ headers: headerObj }))
  }
  // • • • • • • • • • • • • • • • • 1xEND_xxxx899• • • • • • • • • • • • • • • • • • • • • • • • • • • |

  // • • • • • • • • • • • • • • • • EmployeeRoutes• • • • • • • • • • • • • • • • • • • • • • • • • • • |

  add(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_employee + "advance/add", data, ({ headers: headerObj }))
  }
  all(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_employee + "advance/all", data, ({ headers: headerObj }))
  }
  single(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_employee + "advance/single", data, ({ headers: headerObj }))
  }
  // • • • • • • • • • • • • • • • • 1xEND_xxxx899• • • • • • • • • • • • • • • • • • • • • • • • • • • |


}
