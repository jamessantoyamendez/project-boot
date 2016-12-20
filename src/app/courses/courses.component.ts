import { CourseService } from './../core/course.service';
import { Course } from './../core/models/course';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  selectedCourse: Course;
  course: Course;

  constructor(private router: Router, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses()
                     .subscribe(
                      courses => this.courses = courses);
}
  onSelect(course: Course): void{
    this.selectedCourse = course;
  }
  gotoDetail():void{
    this.router.navigate(['/detail',this.selectedCourse.id]);
  }


}
