import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'exercise-register-form',
  template: `
    <div class="container w-25 mt-5">
      <div class="form-group">
        <p>Email</p>
        <input [(ngModel)]="email" type="text" class="form-control">
      </div>

      <div class="form-group">
        <p>Full Name</p>
        <input type="text" class="form-control" placeholder="Enter full name" #inputName>
      </div>
      <button (click)="changeWord(inputName.value)" class="btn-success btn mb-5">Submit</button>

        <p>Email: {{email}}</p>
        <p>Full Name: {{fullName}}</p>
    </div>
  `
})

export class ExerciseRegisterFormComponent implements OnInit {
  email: string = 'hau@gmail.com'
  fullName: string = 'Hau'

  constructor() {
  }

  changeWord(Arg:string) {
    this.fullName = Arg
  }

  ngOnInit() {
  }
}
