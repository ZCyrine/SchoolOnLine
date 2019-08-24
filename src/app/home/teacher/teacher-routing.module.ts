import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from './add/add.component';
import {ShowallComponent} from './showall/showall.component';


const routes: Routes = [{
  path: 'add',
  component: AddComponent},
  {path: 'showall',
    component: ShowallComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
