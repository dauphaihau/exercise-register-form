import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <div style="height: 50px">
            Header
        </div> 
    `
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}