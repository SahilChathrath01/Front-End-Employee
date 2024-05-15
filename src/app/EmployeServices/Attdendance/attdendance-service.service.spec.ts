import { TestBed } from '@angular/core/testing';

import { AttdendanceServiceService } from './attdendance-service.service';

describe('AttdendanceServiceService', () => {
  let service: AttdendanceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttdendanceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
