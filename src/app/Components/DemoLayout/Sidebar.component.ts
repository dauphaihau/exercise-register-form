import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `<div class="sidebar">SidebarComponent</div>`,
  styles: [
    `
      .sidebar {
        background-color: green;
        height: 50px;
      }
    `,
  ],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
