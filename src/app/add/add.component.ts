import {Component, OnInit} from '@angular/core';
import {TasksDataService} from '../tasks-data.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: []
})
export class AddComponent implements OnInit {
  task_to_add: string = null;
  task_id = 0;

  constructor(private taskService: TasksDataService, private toastr: ToastrService) {}

  ngOnInit() {}

  // add new task
  add_Atask() {
    if (this.task_to_add !== '') {
      this.task_id = this.taskService.get_size();
      this.taskService.get_additonal_tasks.emit(this.taskService.add_task(this.task_id, this.task_to_add));
      this.taskService.set_on_chart_changes.emit();
      this.task_to_add = '';
      this.toastr.success('you can add more?', 'Task added successfully!');
    } else {
       //  ***
       // change this to alert user instead.
       // ***
       console.log('Alert empty');
    }
  }


}
