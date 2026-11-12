import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { exitGuardGuard } from './exit-guard.guard';

describe('exitGuardGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => exitGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
