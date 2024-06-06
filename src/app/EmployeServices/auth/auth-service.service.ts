import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  setdata(obj: any) {
    sessionStorage.setItem('token', obj.token)
    sessionStorage.setItem('userdata',JSON.stringify(obj.data))
  }
  getdata() {
    return sessionStorage.getItem('token')
  }
  cleardata() {
    sessionStorage.clear()
  }
}
