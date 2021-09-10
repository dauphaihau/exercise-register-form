import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-demo', // name tag 
  template: `<div>Demo</div>`,// <div> unnessary convert to JSX 
})

// assign Comp to module
export class DemoComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}