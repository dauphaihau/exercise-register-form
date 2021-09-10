import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './Directive.component';
import {Exercise1Component} from "./Exercise1.component";
import { Exercise2Component } from './Exercise2.component';
import {ExerciseRegisterFormComponent} from "./ExerciseRegisterForm.component";

@NgModule({
    declarations: [DirectiveComponent,ExerciseRegisterFormComponent,Exercise1Component,Exercise2Component],
    imports: [CommonModule,FormsModule],
    exports: [DirectiveComponent, ExerciseRegisterFormComponent],
})
export class DirectiveModule { }
