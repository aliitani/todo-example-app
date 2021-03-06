import {Component, OnInit} from '@angular/core';
import {TasksDataService} from '../tasks-data.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: []
})
export class TasksComponent implements OnInit {
  tasks: any[] = null;

  constructor(private tasksService: TasksDataService, private toastr: ToastrService) {
    this.tasksService.set_new_task_list.subscribe((list: any[]) => {
      this.tasks = list;
    });
    this.tasksService.get_additonal_tasks.subscribe((list: any[]) => {
      this.tasks = [];
      for (let i = 0; i < list.length; i++) {
        if (list[i].done === false) {
          this.tasks.push(list[i]);
        }
      }
    });
  }


  // initialize variable onInit
  ngOnInit() {
    this.tasks = this.tasksService.tasks;
  }

  public set_done(task_id) {
    this.tasksService.set_done(task_id);
    this.tasksService.set_new_done_tasks.emit(this.tasksService.get_done_tasks());
    this.tasksService.set_new_task_list.emit(this.tasksService.get_current_tasks());
    this.tasksService.set_new_priority_task.emit(this.tasksService.get_priority_tasks());
    this.tasksService.set_on_chart_changes.emit();
    this.toastr.success('Great Job!', 'Task is Done!');
  }

  public remove_task(task_id) {
    this.tasksService.remove_task(task_id);
    this.tasksService.set_new_task_list.emit(this.tasksService.get_current_tasks());
    this.tasksService.set_new_done_tasks.emit(this.tasksService.get_done_tasks());
    this.tasksService.set_new_priority_task.emit(this.tasksService.get_priority_tasks());
    this.tasksService.set_on_chart_changes.emit();
    this.toastr.warning('You can still add more!', 'Task is Removed!');
  }

  public set_priority(task_id) {
    this.tasksService.set_priority(task_id);
    this.tasksService.set_new_priority_task.emit(this.tasksService.get_priority_tasks());
    this.tasksService.set_on_chart_changes.emit();
    this.toastr.info('Let\'s to it!', 'Task set to Priority!');
  }
}
