import { TestBed, inject } from '@angular/core/testing';

import { AdvanceFilterService } from './advance-filter.service';

describe('AdvanceFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvanceFilterService]
    });
  });

  it('should be created', inject([AdvanceFilterService], (service: AdvanceFilterService) => {
    expect(service).toBeTruthy();
  }));
});
