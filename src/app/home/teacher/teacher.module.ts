import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { ShowallComponent } from './showall/showall.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ ShowallComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule
  ]
})
export class TeacherModule { }
