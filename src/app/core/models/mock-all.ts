import { InMemoryDbService } from 'angular-in-memory-web-api';
export class courseData implements InMemoryDbService {
  createDb(){
    let courses = [
      { id: 11, name: 'Angular2', hours: 32, startDate: '01/01/2017' },
      { id: 12, name: 'Ionic2', hours: 20, startDate: '01/12/2016' },
      { id: 13, name: 'Test automation', hours: 30, startDate: '15/05/2016' },
      { id: 14, name: 'Machine learning', hours: 45, startDate: '01/05/2017' }
    ];
    let teachers = [
      { id: 1, name: 'Bob', lastname: 'Alicon'},
      { id: 2, name: 'Jhony', lastname: 'Bravo'},
      { id: 3, name: 'Alcor', lastname: 'Noque'},
      { id: 4, name: 'Barry', lastname: 'Gota'},
      { id: 5, name: 'James', lastname: 'Santoya'}
    ]

    return {courses, teachers};
  }
}
