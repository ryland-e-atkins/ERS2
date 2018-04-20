import { TestBed, inject } from '@angular/core/testing';

import { NewFormService } from './new-form.service';

describe('NewFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewFormService]
    });
  });

  it('should be created', inject([NewFormService], (service: NewFormService) => {
    expect(service).toBeTruthy();
  }));
});
