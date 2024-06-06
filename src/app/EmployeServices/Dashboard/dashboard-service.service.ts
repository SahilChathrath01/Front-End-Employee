import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { base_url_admin } from 'src/app/Endpoint';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
  token: any
  constructor(private http: HttpClient, private auth: AuthServiceService) {
    this.token = auth.getdata()
  }

  dashboard(data: any) {
    let headerobj = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(base_url_admin + "dashboard", data, { headers: headerobj })
  }
}
