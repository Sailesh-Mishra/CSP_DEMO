import { CanActivateChildFn } from '@angular/router';

export const childGuardGuard: CanActivateChildFn = (childRoute, state) => {
  const isLoggedIn = false;
  if (isLoggedIn) {
    return true;
  } else {
    return false;
  }
};
