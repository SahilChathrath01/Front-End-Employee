import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  steper: any = 1
  multistep = new FormGroup({
   
      name: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required]),
      gender: new FormControl("",[Validators.required]),
      address: new FormControl("",[Validators.required]),
      phone: new FormControl("",[Validators.required]),
      age: new FormControl("",[Validators.required]),


      joindate: new FormControl("",[Validators.required]),
      education: new FormControl("",[Validators.required]),
      experience: new FormControl("",[Validators.required]),
      desination: new FormControl("",[Validators.required]),
      hiredlocation: new FormControl("",[Validators.required]),

   
      accountholder: new FormControl("",[Validators.required,]),
      bankname: new FormControl("",[Validators.required,]),
      ifsccode: new FormControl("",[Validators.required,]),
      bankbranch: new FormControl("",[Validators.required,]),
      accountnumber: new FormControl("",[Validators.required,]),
      conformAccountNumber: new FormControl("",[Validators.required,]),


  })

  submit(){
    this.steper = this.steper + 1
  }
  pervious(){
    this.steper = this.steper - 1
  }
}
