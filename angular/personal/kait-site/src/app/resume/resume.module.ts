import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeHomeComponent } from './resume-home/resume-home.component';


@NgModule({
  declarations: [
    ResumeHomeComponent
    ],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
