import { CanActivateFn } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = true;
  if (isLoggedIn) {
    return true;
  } else {
    return false;
  }
};
