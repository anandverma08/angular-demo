import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  userForm: FormGroup
  get name (){
    return this.userForm.get('name')
  }
  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('Anand Verma', [
        Validators.required,
        Validators.minLength(8)
      ]),
      username: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      website: new FormControl(''),
      address : new FormGroup({
        street: new FormControl(''),
        suite: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl('')
      }),
      hobbies : new FormArray([])
      
    })
  }
  addHobby(){
    (<FormArray>this.userForm.get('hobbies')).push(new FormControl(''))
  }

  deleteHobby(index:number){
    (<FormArray>this.userForm.get('hobbies')).removeAt(index);
  }

  submit() {
    console.log("submit");

  }

}
