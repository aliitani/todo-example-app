import { TestBed, inject } from '@angular/core/testing';

import { TasksDataService } from './tasks-data.service';

describe('TasksDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksDataService]
    });
  });

  it('should be created', inject([TasksDataService], (service: TasksDataService) => {
    expect(service).toBeTruthy();
  }));
});
