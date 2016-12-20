import { TeacherService } from './../../core/teacher.service';
import { Teacher } from './../../core/models/teacher';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {
  teacher: Teacher;
  teachers: Teacher[];
  errorMessage: string;

  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.teacherService.getTeacher(+params['id']))
    .subscribe(teacher => this.teacher = teacher);
  }
  create(){
   this.router.navigate(['/teachers-add']);
  }
  updateTeacher(){
     this.teacherService.updateTeacher(this.teacher)
                      .subscribe
                        (t => this.router.navigate(['/teachers']));

  }
  goBack(): void{
    this.location.back();
  }

  }
