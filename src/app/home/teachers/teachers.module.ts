import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { AddComponent } from './add/add.component';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [AddComponent, StudentComponent],
  imports: [
    CommonModule,
    TeachersRoutingModule
  ]
})
export class TeachersModule { }
