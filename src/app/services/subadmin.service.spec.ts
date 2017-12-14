import { TestBed, inject } from '@angular/core/testing';

import { SubadminService } from './subadmin.service';

describe('SubadminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubadminService]
    });
  });

  it('should be created', inject([SubadminService], (service: SubadminService) => {
    expect(service).toBeTruthy();
  }));
});
