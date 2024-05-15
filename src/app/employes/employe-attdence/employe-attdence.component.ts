import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employe-attdence',
  templateUrl: './employe-attdence.component.html',
  styleUrls: ['./employe-attdence.component.css']
})
export class EmployeAttdenceComponent {
  attdenceForm = new FormGroup({
  name: new FormControl(),
  email: new FormControl(),
  department: new FormControl(),
  desination: new FormControl(),
  time: new FormControl()
  })
  submit(){
    console.log(this.attdenceForm.value);
    
  }
}
