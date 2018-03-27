import {Component} from '@angular/core';
import {TasksDataService} from './tasks-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TasksDataService]
})

export class AppComponent {

  constructor(private taskService: TasksDataService) {}

}
