import {Component, OnInit} from '@angular/core';
import {TasksDataService} from '../tasks-data.service';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.css']
})
export class PriorityComponent implements OnInit {
  tasks: any[] = [];

  ngOnInit() {
    this.tasks = this.taskServices.get_priority_tasks();
  }

  exist_priority() {
    return this.tasks.length === 0;
  }

  constructor(private taskServices: TasksDataService) {
    this.taskServices.set_new_priority_task.subscribe(
      (list: any[]) => {
        this.tasks = list;
      }
    );
  }


}
