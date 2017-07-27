import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { ListingsComponent } from './listings/listings.component'
import { MylistingComponent } from './mylisting/mylisting.component'
import { ShoppageComponent } from './shoppage/shoppage.component'
import { ShowprodComponent } from './showprod/showprod.component'
import { CartComponent } from './cart/cart.component';
import { NavigationComponent } from './navigation/navigation.component'
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';

const routes: Routes = [
  { path: "", component: UserComponent },
  { path: "listings", component: ListingsComponent },
   { path: "mylisting", component: MylistingComponent },
    { path: "shoppage", component: ShoppageComponent },
  { path: "product/:title", component: ShowprodComponent },
  { path: 'cart', component: CartComponent },
  {path:'checkout', component:CheckoutComponent },
  {path:'confirmed', component:OrderConfirmationComponent },
  { path: "", pathMatch: "full", redirectTo: "/"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
