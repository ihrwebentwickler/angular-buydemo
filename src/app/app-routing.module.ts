import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductsComponent} from "./core/components/products/products.component";

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
