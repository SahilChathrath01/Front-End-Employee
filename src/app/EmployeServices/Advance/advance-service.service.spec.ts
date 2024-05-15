import { TestBed } from '@angular/core/testing';

import { AdvanceServiceService } from './advance-service.service';

describe('AdvanceServiceService', () => {
  let service: AdvanceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvanceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
