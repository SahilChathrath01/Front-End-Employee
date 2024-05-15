import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employe-advance',
  templateUrl: './employe-advance.component.html',
  styleUrls: ['./employe-advance.component.css']
})
export class EmployeAdvanceComponent {

 advanceForm = new FormGroup({
  name: new FormControl(),
  desination: new FormControl(),
  advanceAmount: new FormControl(),
  message: new FormControl(),
 })
 submit(){
  console.log(this.advanceForm.value);
  
 } 
}
