import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employe-leaves',
  templateUrl: './employe-leaves.component.html',
  styleUrls: ['./employe-leaves.component.css']
})
export class EmployeLeavesComponent {
 leaveForm = new FormGroup({
  name: new FormControl(),
  department: new FormControl(),
  message: new FormControl(),
  date2: new FormControl(),
  date1: new FormControl(),

 })
 submit(){
  console.log(this.leaveForm.value);
  
 }
}
