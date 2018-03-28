import {Component, OnInit} from '@angular/core';
import {TasksDataService} from '../tasks-data.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit{
  tasks: any[] = [];

  ngOnInit() {
    this.tasks = this.tasksServices.get_done_tasks();
  }

  constructor(private tasksServices: TasksDataService) {
    this.tasksServices.set_new_done_tasks.subscribe(
      (list: any[]) => {
          this.tasks = list;
      }
    );
  }

}
