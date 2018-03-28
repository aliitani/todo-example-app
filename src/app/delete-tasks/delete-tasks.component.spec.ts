import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTasksComponent } from './delete-tasks.component';

describe('DeleteTasksComponent', () => {
  let component: DeleteTasksComponent;
  let fixture: ComponentFixture<DeleteTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
