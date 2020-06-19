import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGaurd } from './app.authgaurd';
import { TasksComponent } from './tasks/tasks.component';


const routes: Routes = [
  {path :'tasks' , component : TasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
