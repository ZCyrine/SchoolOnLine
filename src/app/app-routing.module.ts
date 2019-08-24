import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';



const routes: Routes = [{
  path : '' ,
  component : HomeComponent, children :[
    {path: 'teacher',
      loadChildren: './home/teacher/teacher.module#TeachersModule'},
  ]





}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
