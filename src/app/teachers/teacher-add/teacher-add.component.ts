import { TeacherService } from './../../core/teacher.service';
import { Teacher } from './../../core/models/teacher';

import { Component, OnInit, Inject} from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute,Params } from '@angular/router';


@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {
  teachers: Teacher[];
  public teacher: Teacher = new Teacher();

  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
    ) { }

  ngOnInit(){

  }
   createTeacher(){
   this.teacherService.createTeacher(this.teacher)
                     .subscribe
                     (t => this.router.navigate(['/teachers']));
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
