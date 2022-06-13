import { TestBed } from '@angular/core/testing';

import { DwellingsApiService } from './dwellings-api.service';

describe('DwellingsApiService', () => {
  let service: DwellingsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DwellingsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
