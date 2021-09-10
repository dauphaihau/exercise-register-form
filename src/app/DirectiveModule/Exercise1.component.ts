import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-content',
  template: `
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary btn-lg"
      data-toggle="modal"
      data-target="#modelId"
    >
      Launch
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modelId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="form-group">
                <p>User Name</p>
                <input
                  type="text"
                  class="form-control"
                  #userNe
                  [(ngModel)]="userLogin.userName"
                />
              </div>
              <div class="form-group">
                <p>Password</p>
                <input
                  type="text"
                  class="form-control"
                  #passwordNe
                  [(ngModel)]="userLogin.password"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              (click)="login(userNe.value, passwordNe.value)"
            >
              Login
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              id="btnClose"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class Exercise1Component implements OnInit {
  constructor() {}
  isLogin: boolean = true;
  userName: string = '';
  userLogin = { userName: '', password: '' };

  ngOnInit() {
    // like did mount
  }
  login(userName: string, password: string) {
    if (password === '11') {
      this.isLogin = true;
      this.userName = userName;
    }
  }
}
