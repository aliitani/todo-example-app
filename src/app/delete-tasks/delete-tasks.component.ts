import { Component, OnInit } from '@angular/core';
import {TasksDataService} from '../tasks-data.service';

@Component({
  selector: 'app-delete-tasks',
  templateUrl: './delete-tasks.component.html',
  styleUrls: ['./delete-tasks.component.css']
})
export class DeleteTasksComponent implements OnInit {

  constructor(private tasksService: TasksDataService) { }

  ngOnInit() {
  }

  delete_tasks() {
    this.tasksService.delete_tasks();
    this.tasksService.set_new_task_list.emit(this.tasksService.get_current_tasks());
    this.tasksService.set_new_done_tasks.emit(this.tasksService.get_done_tasks());
    this.tasksService.set_new_priority_task.emit(this.tasksService.get_priority_tasks());
    this.tasksService.set_on_chart_changes.emit();
  }

  delete_done() {
    this.tasksService.set_new_task_list.emit(this.tasksService.delete_d_tasks());
    this.tasksService.set_new_done_tasks.emit(this.tasksService.get_done_tasks());
    this.tasksService.set_new_priority_task.emit(this.tasksService.get_priority_tasks());
    this.tasksService.set_on_chart_changes.emit();
  }

}
