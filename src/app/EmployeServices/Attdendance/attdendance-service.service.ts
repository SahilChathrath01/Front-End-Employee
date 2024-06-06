import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { base_url_admin, base_url_employee } from 'src/app/Endpoint';

@Injectable({
  providedIn: 'root'
})
export class AttdendanceServiceService {
  token: any
  constructor(private http: HttpClient, private auth: AuthServiceService) {
    this.token = auth.getdata()
  }

  // • • • • • • • • • • • • • • • • Admin_Routes• • • • • • • • • • • • • • • • • • • • • • • • • • • |

  All(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "attendence/all", data, ({ headers: headerObj }))
  }
  Single(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "attendence/single", data, ({ headers: headerObj }))
  }
  update(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "attendence/update", data, ({ headers: headerObj }))
  }
  Search(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "search/attendence/:key", data, ({ headers: headerObj }))
  }
  // • • • • • • • • • • • • • • • • 1xEND_xxxx899• • • • • • • • • • • • • • • • • • • • • • • • • • • |

  // • • • • • • • • • • • • • • • • Employee_Routes• • • • • • • • • • • • • • • • • • • • • • • • • • |

  all(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_employee + "attendence/all", data, ({ headers: headerObj }))
  }
  add(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_employee + "attendence/add", data, ({ headers: headerObj }))
  }
  single(data: any) {
    let headerObj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_employee + "attendence/single", data, ({ headers: headerObj }))
  }
    // • • • • • • • • • • • • • • • • 1xEND_xxxx899• • • • • • • • • • • • • • • • • • • • • • • • • • • |

}
