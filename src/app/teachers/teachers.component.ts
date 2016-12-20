import { TeacherService } from './../core/teacher.service';
import { Teacher } from './../core/models/teacher';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],

})
export class TeachersComponent implements OnInit {
  teacher: Teacher;
  teachers: Teacher[];
  selectedTeacher: Teacher;
  constructor(
    private router: Router,private teacherService: TeacherService) { }

  ngOnInit(): void {
     this.teacherService.getTeachers()
                     .subscribe(
                      teachers => this.teachers = teachers);
  }
  onSelectTeacher(teacher: Teacher): void{
    console.log(teacher);
    this.selectedTeacher = teacher;
  }
  gotoDetailTeacher(): void{
    this.router.navigate(['detail2', this.selectedTeacher.id]);
  }


}
