import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyRoutingModule } from './buy-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './pages/list/list.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CheckoutComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    BuyRoutingModule,
    ReactiveFormsModule
  ]
})
export class BuyModule { }
