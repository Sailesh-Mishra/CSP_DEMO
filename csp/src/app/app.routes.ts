import { Routes } from '@angular/router';
import { ProductsComponent } from './components/routing-demo/products/products.component';
import { HomeComponent } from './components/routing-demo/home/home.component';
import { NotFoundComponent } from './components/routing-demo/not-found/not-found.component';
import { ProductsDetailsComponent } from './components/routing-demo/products-details/products-details.component';
import { ProductAddComponent } from './components/routing-demo/products/product-add/product-add.component';
import { ProductEditComponent } from './components/routing-demo/products/product-edit/product-edit.component';
import { authGuardGuard } from './guard/auth-guard.guard';
import { childGuardGuard } from './guard/child-guard.guard';
import { exitGuardGuard } from './guard/exit-guard.guard';
import { matchGuardGuard } from './guard/match-guard.guard';
import { userResolver } from './resolver/user.resolver';
import { FormDemoComponent } from './components/form-demo/form-demo.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'products',
        component: ProductsComponent,
        canActivate: [authGuardGuard],
        canActivateChild: [childGuardGuard],
        canDeactivate: [exitGuardGuard],
        canMatch: [matchGuardGuard],
        children: [
            { path: 'productAdd', component: ProductAddComponent }
        ]
    },
    {
        path: 'products/productEdit',
        loadComponent: () => import('./components/routing-demo/products/product-edit/product-edit.component').then(m => {
            console.log("Called....");
            return m.ProductEditComponent;
        })
    },
    // { path: 'products/:id', component: ProductsDetailsComponent, resolve: {user: userResolver} },
    { path: 'form', component: FormDemoComponent },
    { path: '**', component: NotFoundComponent }
];
