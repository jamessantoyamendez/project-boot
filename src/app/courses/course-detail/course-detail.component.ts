import { CourseService } from './../../core/course.service';
import { TeacherService } from './../../core/teacher.service';
import { Teacher } from './../../core/models/teacher';
import { Course } from './../../core/models/course';

import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params} from '@angular/router'

import { Component, OnInit, Input } from '@angular/core';
import { Location }               from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course: Course;
  courses: Course[];
  teachers: Teacher[];
  errorMessage: string;

  constructor(
    private teacherService: TeacherService,
    private courseService: CourseService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.courseService.getCourse(+params['id']))
    .subscribe(course => this.course = course);
    this.teacherService.getTeachers()
                     .subscribe(
                      teachers => this.teachers = teachers);
  }
  create(){
  this.router.navigate(['/courses-add']);
  }
  updateCourse(){
    this.courseService.updateCourse(this.course)
                      .subscribe
                      ( t => this.router.navigate(['/courses']));
  }

  onDateChanged(event:any) {
  ('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
  }

  onInputFieldChanged(event:any) {
  ('onInputFieldChanged(): Value: ', event.value, ' - dateFormat: ', event.dateFormat, ' - valid: ', event.valid);
  }

  goBack(): void{
    this.location.back();
  }


}
