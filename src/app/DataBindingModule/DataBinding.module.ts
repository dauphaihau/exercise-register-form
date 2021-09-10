import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DataBindingComponent} from './DataBinding.component';

// use FormsModule cho 2 way binding
import {FormsModule} from '@angular/forms';
import {DemoNgContentComponent} from "../DirectiveModule/DemoNgContent.component";

@NgModule({
  declarations: [DataBindingComponent,DemoNgContentComponent],
  imports: [CommonModule, FormsModule],
  exports: [DataBindingComponent],
})
export class DataBindingsModule {}
