import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivderComponent } from './divder/divder.component';



@NgModule({
  declarations: [
    DivderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DivderComponent]
})
export class SharedModule { }
