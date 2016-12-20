import { CourseService } from './core/course.service';
import { TeacherService } from './core/teacher.service';
import { courseData } from './core/models/mock-all';
import { CourseAddComponent } from './courses/course-add/course-add.component';
import { TeacherAddComponent } from './teachers/teacher-add/teacher-add.component';
import { OrderByPipe } from './shared/order-by.pipe';
import { TeacherDetailComponent } from './teachers/teacher-detail/teacher-detail.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';

import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }  from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';

import { HomeComponent } from './home/home.component';
import { TeachersComponent } from './teachers/teachers.component';

import { MyDatePickerModule } from 'mydatepicker';
import {DataTableModule} from "angular2-datatable";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseDetailComponent,
    HomeComponent,
    TeachersComponent,
    TeacherDetailComponent,
    OrderByPipe,
    TeacherAddComponent,
    CourseAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MyDatePickerModule,
    DataTableModule,
    InMemoryWebApiModule.forRoot(courseData)
  ],
  providers: [courseData, TeacherService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
