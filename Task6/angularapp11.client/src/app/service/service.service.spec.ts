import { TestBed } from '@angular/core/testing';

import { AdnanServiceService } from './service.service';

describe('AdnanServiceService', () => {
  let service: AdnanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdnanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
