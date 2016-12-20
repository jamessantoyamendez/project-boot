import { CourseAddComponent } from './courses/course-add/course-add.component';
import { TeacherAddComponent } from './teachers/teacher-add/teacher-add.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherDetailComponent } from './teachers/teacher-detail/teacher-detail.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';

import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'detail/:id', component: CourseDetailComponent},
  { path: 'courses', component: CoursesComponent},
  { path: 'detail2/:id', component: TeacherDetailComponent},
  { path: 'teachers', component: TeachersComponent},
  { path: 'teachers-add', component: TeacherAddComponent},
  { path: 'courses-add', component: CourseAddComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
