import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <app-header></app-header>
            <div class="d-flex">
                <div style="width:30%">
                    <app-sidebar></app-sidebar>
                </div>
                <div style="width:70%">
                    <!-- <app-content></app-content> -->
                </div>

            </div>
            <div>
                <app-footer></app-footer>
            </div>
        </div>
    `
})

export class DemoLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
