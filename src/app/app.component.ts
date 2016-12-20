import { OrderByPipe } from './shared/order-by.pipe';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //pipes: [OrderByPipe]

})
export class AppComponent {
  title = 'Yuxi Courses!';

}
