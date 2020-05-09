import { TestBed } from '@angular/core/testing';

import { ArsService } from './ars.service';

describe('ArsService', () => {
  let service: ArsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
