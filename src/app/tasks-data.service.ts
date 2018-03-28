import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class TasksDataService {
  tasks: any[] = [
    {id: 0, name: 'Task 1', done: false, priority: true}, {id: 1, name: 'Task 1', done: false, priority: true},
    {id: 2, name: 'Task 1', done: false, priority: true}, {id: 3, name: 'Task 1', done: false, priority: true},
    {id: 4, name: 'Task 1', done: false, priority: true}, {id: 5, name: 'Task 1', done: false, priority: true},
    {id: 6, name: 'Task 1', done: false, priority: true}, {id: 7, name: 'Task 1', done: false, priority: true}
    ];
  set_new_priority_task = new EventEmitter<any[]>();
  set_new_done_tasks = new EventEmitter<any[]>();
  set_on_chart_changes = new EventEmitter<string>();
  set_new_task_list = new EventEmitter<any[]>();
  get_additonal_tasks = new EventEmitter<any[]>();

  delete_tasks() {
    this.tasks = [];
    return this.tasks;
  }

  delete_d_tasks() {
    const delete_tasks_list: any[] = [];
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].done === true) {
        delete_tasks_list.push(i);
      }
    }

    for (let i = 0; i < delete_tasks_list.length; i++) {
      this.tasks.splice(delete_tasks_list[i], 1);
    }

    if (this.get_done_tasks_size() > 0) {
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].done === true) {
          delete_tasks_list.push(i);
        }
      }

      for (let i = 0; i < delete_tasks_list.length; i++) {
        this.tasks.splice(delete_tasks_list[i], 1);
      }
    }

    return this.tasks;
  }

  add_task(i: number, t: string) {
    this.tasks.push({id: i, name: t, done: false, priority: false});
    return this.tasks;
  }

  get_size() {
    return this.tasks.length;
  }

  get_current_tasks() {
    const list: any[] = [];

    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].done === false) {
        list.push(this.tasks[i]);
      }
    }
    return list;
  }

  set_done(id: number) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === id) {
        this.tasks[i].done = true;
      }
    }
  }

  set_priority(id: number) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === id) {
        if (this.tasks[i].priority) {
          this.tasks[i].priority = false;
        } else {
          this.tasks[i].priority = true;
        }
      }
    }
  }

   get_priority_size(): number {
    let count = 0;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].priority === true && this.tasks[i].done === false) {
        count++;
      }
     }
    return count;
  }

  get_done_tasks(): any[] {
    const list_done: any[] = [];

    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].done === true) {
        list_done.push(this.tasks[i]);
      }
    }
    return list_done;
  }


  get_priority_tasks(): any[] {
    const list_priority: any = [];

    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].done === false && this.tasks[i].priority === true) {
        list_priority.push(this.tasks[i]);
      }
    }
    return list_priority;
  }

  get_done_tasks_size(): number {
    let count = 0;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].done === true) {
        count++;
      }
    }
    return count;
  }

  get_normalTask_size(): number {
    let count = 0;

    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].done === false && this.tasks[i].done === false) {
        count++;
      }
    }

    return count;
  }

  remove_task(id: number) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === id) {
        this.tasks.splice(i, 1);
      }
    }
  }
}
