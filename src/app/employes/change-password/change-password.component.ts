import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
changeForm = new FormGroup({
  oldPassword: new FormControl("",[Validators.required]),
  newPassword: new FormControl("",[Validators.required]),
  conformPassword: new FormControl("",[Validators.required])
})
submit(){
  console.log(this.changeForm.value);
  
}
}
