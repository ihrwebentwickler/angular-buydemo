import {Routes} from '@angular/router';
import {ProductsComponent} from "./core/components/products/products.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'basket',
    loadComponent: () =>
      import('./features/basket/pages/basket.component')
        .then(m => m.BasketComponent)
  },
  {
    path: '**', redirectTo: 'products', 'pathMatch': 'full'
  }
];
