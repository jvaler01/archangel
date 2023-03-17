import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandarComponent } from './standar/standar.component';



@NgModule({
  declarations: [
    StandarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StandarComponent
  ]
})
export class ButtonModule { }
