import { ResolveFn } from '@angular/router';

export const userResolver: ResolveFn<string> = (route, state) => {
  return 'John';
};
