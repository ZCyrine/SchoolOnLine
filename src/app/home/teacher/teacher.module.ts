import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { ShowallComponent } from './showall/showall.component';


@NgModule({
  declarations: [ ShowallComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
