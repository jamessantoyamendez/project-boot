import { TeacherService } from './../../core/teacher.service';
import { CourseService } from './../../core/course.service';
import { Teacher } from './../../core/models/teacher';
import { Course } from './../../core/models/course';

import { ActivatedRoute, Router, } from '@angular/router';

import { Component, OnInit, Inject} from '@angular/core';
import { Location } from '@angular/common';
import { Route,Params } from '@angular/router';


@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  courses: Course[];
  teachers: Teacher[];
  public course: Course = new Course();

  constructor(
    private courseService: CourseService,
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
    ) { }

  ngOnInit(): void{
    this.teacherService.getTeachers()
                     .subscribe(
                      teachers => this.teachers = teachers);
  }
   createCourse(){
   this.courseService.createCourse(this.course)
                     .subscribe
                     (t => this.router.navigate(['/courses']));
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
