import { Component, OnInit } from '@angular/core';
import {TasksDataService} from '../tasks-data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers: []
})
export class ChartComponent implements OnInit {
  tasks: any[] = null;
  public doughnutChartLabels: string[] = ['Priority', 'Done', 'UnDone'];
  public doughnutChartData = null;
  public doughnutChartType = 'doughnut';
  public priority = null;
  public done = null;
  public normal = null;
  public size = null;

  constructor(private tasksData: TasksDataService) {
    this.tasksData.set_on_chart_changes.subscribe(
      (changes: string) => {
        this.doughnutChartData = [this.tasksData.get_priority_size(), this.tasksData.get_done_tasks_size(),
          this.tasksData.get_normalTask_size()];
        this.size = this.tasksData.tasks.length;
        this.priority = isNaN(Math.round((this.tasksData.get_priority_size() / this.size) * 100)) ? 0 : Math.round((this.tasksData.get_priority_size() / this.size) * 100);
        this.done = isNaN(Math.round((this.tasksData.get_done_tasks_size() / this.size) * 100)) ? 0 : Math.round((this.tasksData.get_done_tasks_size() / this.size) * 100);
        this.normal = isNaN(Math.round((this.tasksData.get_normalTask_size() / this.size) * 100)) ? 0 : Math.round((this.tasksData.get_normalTask_size() / this.size) * 100);
      }
    );
  }

  ngOnInit() {
    this.tasks = [this.tasksData.get_priority_size(), this.tasksData.get_done_tasks_size(), this.tasksData.get_normalTask_size()];
    this.doughnutChartData = [this.tasks[0], this.tasks[1], this.tasks[2]];
    this.size = this.tasksData.tasks.length;
    this.priority = isNaN(Math.round((this.tasksData.get_priority_size() / this.size) * 100)) ? 0 : Math.round((this.tasksData.get_priority_size() / this.size) * 100);
    this.done = isNaN(Math.round((this.tasksData.get_done_tasks_size() / this.size) * 100)) ? 0 : Math.round((this.tasksData.get_done_tasks_size() / this.size) * 100);
    this.normal = isNaN(Math.round((this.tasksData.get_normalTask_size() / this.size) * 100)) ? 0 : Math.round((this.tasksData.get_normalTask_size() / this.size) * 100);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
