import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {
  constructor(private router : Router){}
  step: any = 1;
  multistep = new FormGroup({
    Personal: new FormGroup({
      name: new FormControl("",[Validators.required,Validators.nullValidator]),
      email: new FormControl("",[Validators.required,Validators.nullValidator]),
      gender: new FormControl("",[Validators.required,Validators.nullValidator]),
      address: new FormControl("",[Validators.required,Validators.nullValidator]),
      phone: new FormControl("",[Validators.required,Validators.nullValidator]),
      age: new FormControl("",[Validators.required,Validators.nullValidator]),
    }),
    employedetails: new FormGroup({
      joindate: new FormControl("",[Validators.required,Validators.nullValidator]),
      education: new FormControl("",[Validators.required,Validators.nullValidator]),
      experience: new FormControl("",[Validators.required,Validators.nullValidator]),
      desination: new FormControl("",[Validators.required,Validators.nullValidator]),
      hiredlocation: new FormControl("",[Validators.required,Validators.nullValidator]),
    }),
    bankdetails: new FormGroup({
      accountholder: new FormControl("",[Validators.required,Validators.nullValidator,]),
      bankname: new FormControl("",[Validators.required,Validators.nullValidator]),
      ifsccode: new FormControl("",[Validators.required,Validators.nullValidator]),
      bankbranch: new FormControl("",[Validators.required,Validators.nullValidator]),
      accountnumber: new FormControl("",[Validators.required,Validators.nullValidator]),
      conformAccountNumber: new FormControl("",[Validators.required,Validators.nullValidator]),
    })

  })
  
  submit() {
   this.step = this.step + 1
  }

  pervious() {
    this.step = this.step - 1
  }
}

