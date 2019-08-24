import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { AddComponent } from './add/add.component';
import { ShowallComponent } from './showall/showall.component';


@NgModule({
  declarations: [AddComponent, ShowallComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
