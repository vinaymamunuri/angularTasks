import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGaurd } from './app.authgaurd';
import { TasksComponent } from './tasks/tasks.component';
import { Task2Component } from './task2/task2.component';


const routes: Routes = [
  {path :'tasks' , component : TasksComponent},
  {path : 'task2' , component: Task2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
