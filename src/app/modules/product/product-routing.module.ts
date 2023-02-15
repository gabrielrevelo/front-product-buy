import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: "create",
    component: CreateComponent
  },
  {
    path: "list",
    component: ListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
