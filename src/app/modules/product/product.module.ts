import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './pages/list/list.component';

@NgModule({
  declarations: [
    CreateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
