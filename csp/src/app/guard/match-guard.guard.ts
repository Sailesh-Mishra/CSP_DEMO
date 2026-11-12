import { CanMatchFn } from '@angular/router';

export const matchGuardGuard: CanMatchFn = (route, segments) => {
  const isLoggedIn = true;
  if (isLoggedIn) {
    return true;
  } else {
    return false;
  }
};
