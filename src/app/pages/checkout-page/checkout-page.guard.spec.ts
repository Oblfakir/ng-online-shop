import { TestBed, async, inject } from '@angular/core/testing';

import { CheckoutPageGuard } from './checkout-page.guard';

describe('CheckoutPageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckoutPageGuard]
    });
  });

  it('should ...', inject([CheckoutPageGuard], (guard: CheckoutPageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
