import { Course } from './models/course';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';



@Injectable()
export class CourseService {
  private coursesUrl = 'app/courses';
  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor (private http: Http) {}

  getCourses (): Observable<Course[]>{
    return this.http.get(this.coursesUrl)
                .map(response => response.json().data as Course[]);
  }
  getCourse(id: number): Observable<Course>{
    const url = `${this.coursesUrl}/${id}`;
    return this.http.get(url)
                .map((r: Response) => r.json().data as Course);
  }
  createCourse(course: Course): Observable<Course>{
    return this.http
          .post(this.coursesUrl,  JSON.stringify(course), {headers: this.headers})
          .map(response => response.json().data as Course);
  }
  updateCourse(course: Course): Observable<Course>{
    const url = `${this.coursesUrl}/${course.id}`;
    return this.http
          .put(url,  JSON.stringify(course), {headers: this.headers})
          .map(() => course)
  }

}
