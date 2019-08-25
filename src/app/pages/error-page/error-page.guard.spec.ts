import { TestBed, async, inject } from '@angular/core/testing';

import { ErrorPageGuard } from './error-page.guard';

describe('ErrorPageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorPageGuard]
    });
  });

  it('should ...', inject([ErrorPageGuard], (guard: ErrorPageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
