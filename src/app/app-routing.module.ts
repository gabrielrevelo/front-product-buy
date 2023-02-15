import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/buy'
  },
  {
    path: 'buy',
    loadChildren: () =>
      import('./modules/buy/buy.module').then((m) => m.BuyModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./modules/product/product.module').then((m) => m.ProductModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
