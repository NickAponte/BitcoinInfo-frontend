import { TestBed } from '@angular/core/testing';

import { BitInfoServiceService } from './bit-info-service.service';

describe('BitInfoServiceService', () => {
  let service: BitInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
