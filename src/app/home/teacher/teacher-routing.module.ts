import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowallComponent} from './showall/showall.component';


const routes: Routes = [
  {
    path :'showall',
    component : ShowallComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
