import { Observable } from 'rxjs/Observable';
import { Teacher } from './models/teacher';
import { TEACHERS } from './models/mock-teacher';
import { Injectable } from '@angular/core';
import { Headers, RequestOptions,Http } from '@angular/http';

@Injectable()
export class TeacherService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private teachersUrl = 'app/teachers';
  constructor(private http: Http) { }

  getTeachers(): Observable<Teacher[]>{
    return this.http.get(this.teachersUrl)
                .map(response => response.json().data as Teacher[]);
  }
  getTeacher(id: number): Observable<Teacher>{
    const url = `${this.teachersUrl}/${id}`;
    return this.http.get(url)
                .map(response => response.json().data as Teacher);
  }
  createTeacher(teacher: Teacher): Observable<Teacher>{
    return this.http
          .post(this.teachersUrl,  JSON.stringify(teacher), {headers: this.headers})
          .map(response => response.json().data as Teacher);
  }
   updateTeacher(teacher: Teacher): Observable<Teacher>{
        const url = `${this.teachersUrl}/${teacher.id}`;
        return this.http
            .put(url, JSON.stringify(teacher), { headers: this.headers })
            .map(() => teacher)
    }

}
