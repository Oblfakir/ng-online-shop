import { TestBed, async, inject } from '@angular/core/testing';

import { UserPageGuard } from './user-page.guard';

describe('UserPageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPageGuard]
    });
  });

  it('should ...', inject([UserPageGuard], (guard: UserPageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
