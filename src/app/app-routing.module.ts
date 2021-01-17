import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: "todo", component: TodoComponent },
  { path: "", component: CourseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
