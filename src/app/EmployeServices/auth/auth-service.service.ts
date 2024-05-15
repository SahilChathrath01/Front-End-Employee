import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  setdata(data: any) {
    sessionStorage.setItem('token', data.token)
  }
  getdata() {
    return sessionStorage.getItem('Token')
  }
  cleardata() {
    sessionStorage.clear()
  }
}
