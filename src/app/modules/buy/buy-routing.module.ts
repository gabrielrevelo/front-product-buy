import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ListComponent } from './pages/list/list.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: "",
    component: ProductsComponent
  },
  {
    path: "checkout",
    component: CheckoutComponent
  },
  {
    path: "list",
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyRoutingModule { }
