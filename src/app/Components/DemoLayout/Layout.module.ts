import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentComponent } from './Content.component';
import { DemoLayoutComponent } from './DemoLayout.component';
import { FooterComponent } from './Footer.component';
import { HeaderComponent } from './Header.component';

import { SidebarComponent } from './Sidebar.component';

@NgModule({
  declarations: [ // contain Comp of this module
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    DemoLayoutComponent // main Comp -> contain rest comp
  ],
  exports: [DemoLayoutComponent], // last result -> can export Comp, Module of this module ( to another module can import )
  imports: [CommonModule],
  providers: [],
})
export class DemoLayoutModule { } // notice above export Comp, but here is Module
