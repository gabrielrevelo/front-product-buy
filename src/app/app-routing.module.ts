import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAdminGuard } from './guards/is-admin.guard';
import { IsUserGuard } from './guards/is-user.guard';
import { LoginComponent } from './modules/login/login/login.component';
import { RegisterComponent } from './modules/login/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'buy',
    canActivate: [IsUserGuard],
    loadChildren: () =>
      import('./modules/buy/buy.module').then((m) => m.BuyModule),
  },
  {
    path: 'product',
    canActivate: [IsAdminGuard],
    loadChildren: () =>
      import('./modules/product/product.module').then((m) => m.ProductModule),
  },
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
