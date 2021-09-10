import { Component } from '@angular/core';

// 1 Comp just a Class until declare with Angular
@Component({ // to covert Class -> Comp, An will assign @ ( metadata ) for Class
  selector: 'app-root', // name tag
  templateUrl: './app.component.html', // html of tag
  styleUrls: ['./app.component.css'] // css of tag
})

export class AppComponent {
  // content Typescript of Comp will define here
  title = 'angular';
}
