import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directives',
  template: `
    <div class="container">
      <nav>
        <h1>*ngIf</h1>
        <p>ex1: click to login</p>
        <nav class="nav bg-dark text-white">
          <a *ngIf="!isLogin ; else templateLogin" href="#" (click)="login()"
             class="nav-link active text-white">Login</a>
          <!--<a *ngIf="isLogin" class="nav-link active text-white" href="#">Hi !</a>-->
        </nav>

        <ng-template #templateLogin> <!-- useless, amost use to create Comp instead, this template only use in Comp -->
          <a *ngIf="isLogin" class="nav-link active text-white" href="#">Hi {{userName}}!</a>
        </ng-template>

        <p class="mt-3">ex2: input number</p>
        <div class="form-group">
          <input class="form-control w-25" [(ngModel)]="number"/>
        </div>
        <div class="alert alert-success w-25">
          <a *ngIf="number % 2 !== 0">odd number</a>
          <a *ngIf="number % 2 == 0">primitive number</a>
        </div>

        <!------------------------------------------------------------------->
        <h1 class="mt-5">*ngSwitchCase</h1>
        <select [(ngModel)]="color" class="form-control w-25">
          <option value="red">Red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="orange">orange</option>
        </select>

        <div [ngSwitch]="color">
          <p *ngSwitchCase="'red'" style="color: black">Red</p>
          <p *ngSwitchCase="'green'" style="color: green">green</p>
          <p *ngSwitchCase="'blue'" style="color: blue">blue</p>
          <p *ngSwitchCase="'orange'" style="color: orange">orange</p>
        </div>


        <!------------------------------------------------------------------->
        <h1 class="mt-5">*ngFor</h1>
        <div class="row">
          <div class="col-4" *ngFor="let user of arrUser; let index =index">
            <div class="card">
              <img [src]="user.avatarUrl" alt='...'>
              <div class="card-body">
                <p>ID: {{index + 1}}</p>
                <p>userName: {{user.userName}}</p>
                <p>password: {{user.password}}</p>
                <p>Email: {{user.email}} </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <hr>
      <h1>ngStyle</h1>


    </div>`,
  styles: [`
    .colorText {
      color: red;
    }

    .fontText {
      font-size: 16px;
    }
  `]
})
export class DirectiveComponent implements OnInit {

  colorText: boolean = true
  fontText: boolean = false

  arrUser: User[] = [
    {userName: 'sheep', password: '111111', email: 'sheep@gmail.com', avatarUrl: 'https://i.pravatar.cc?u=sheep'},
    {userName: 'fish', password: '111111', email: 'fish@gmail.com', avatarUrl: 'https://i.pravatar.cc?u=fish'},
    {userName: 'bear', password: '111111', email: 'bear@gmail.com', avatarUrl: 'https://i.pravatar.cc?u=bear'},
  ];

  color: string = 'black';
  number: number = 11;
  userName: string = 'John';
  isLogin: boolean = false;

  login() {
    this.isLogin = true;
  }

  constructor() {
  }

  ngOnInit() {
  }
}

interface User { // ex for ngFor
  userName: string;
  password: string;
  email: string;
  avatarUrl: string;
}
