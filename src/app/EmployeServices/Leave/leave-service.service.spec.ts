import { TestBed } from '@angular/core/testing';

import { LeaveServiceService } from './leave-service.service';

describe('LeaveServiceService', () => {
  let service: LeaveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
