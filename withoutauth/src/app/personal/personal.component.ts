import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  formdata:any
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formdata =  this.fb.group({
        
      userName: new FormControl(),
      datearrival:new FormControl()
   });  
  }
  get fulldata() { 
    return this.formdata.controls;
   }

}
