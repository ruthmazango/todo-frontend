import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: 'home', component: HomeComponent }
  { path: 'home', component: TaskListComponent},
  { path: 'task/:id', component: TaskDetailComponent},
  { path: 'add-task', component: TaskEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true }
    )],
  exports: [RouterModule],
  declarations: [
    //TaskDetailComponent,
    //TaskListComponent,
    //TaskEditComponent
  ]
})
export class AppRoutingModule { }
