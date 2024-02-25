import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodlistPageComponent } from './components/pages/foodlist-page/foodlist-page.component';
import { FooditemsComponent } from './components/shared/fooditems/fooditems.component';
import { LoginComponent } from './components/shared/login/login.component';
import { authGuard } from './guards/auth.guard';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: '', component: HomeComponent },
  {
    path: 'foodlist',
    component: FoodlistPageComponent,
    children: [
      { path: '', component: FooditemsComponent },
      { path: 'search/:searchTerm', component: FooditemsComponent },
      { path: 'tag/:tag', component: FooditemsComponent },
    ],
  },
  { path: 'food/:id', component: FoodPageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
