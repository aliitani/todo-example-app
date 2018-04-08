import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { PriorityComponent } from './priority/priority.component';
import { DoneComponent } from './done/done.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { DeleteTasksComponent } from './delete-tasks/delete-tasks.component';
import { LinksComponent } from './links/links.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    PriorityComponent,
    DoneComponent,
    HeaderComponent,
    TasksComponent,
    AddComponent,
    DeleteTasksComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
