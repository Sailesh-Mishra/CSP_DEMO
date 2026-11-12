import { CanDeactivateFn } from '@angular/router';
import { ProductsComponent } from '../components/routing-demo/products/products.component';

export const exitGuardGuard: CanDeactivateFn<ProductsComponent> = (component, currentRoute, currentState, nextState) => {
  return component.canExit();
};
