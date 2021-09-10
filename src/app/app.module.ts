import { DirectiveModule } from './DirectiveModule/Directive.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './Components/Demo.components';
import { DemoLayoutComponent } from './Components/DemoLayout/DemoLayout.component';
import { FooterComponent } from './Components/DemoLayout/Footer.component';
import { HeaderComponent } from './Components/DemoLayout/Header.component';
import { DemoLayoutModule } from './Components/DemoLayout/Layout.module';
import { DataBindingsModule } from './DataBindingModule/DataBinding.module';
import { ProductListComponent } from './Components/PropsModule/DemoInput/ProductList.component';

@NgModule({
  declarations: [ // where contain Comp ( each comp born , must have module contain )
    AppComponent,
    DemoComponent,
  ],
  imports: [ // where import other module of app
    BrowserModule,
    DemoLayoutModule,
    DataBindingsModule,
    DirectiveModule,
  ],
  providers: [], // where declare services
  bootstrap: [AppComponent], // where declare Component <app-root></app-root> -> run on index
})
export class AppModule {}
