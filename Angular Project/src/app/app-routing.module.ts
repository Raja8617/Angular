import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../app/about/about.component'
import { HomeComponent } from './home/home.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { ProductcheckComponent } from './productcheck/productcheck.component';
import { ProductsComponent } from './products/products.component';
import { BuyorderComponent } from './buyorder/buyorder.component';
import { FinalpageComponent } from './finalpage/finalpage.component';
import { AccountComponent } from './account/account.component'






const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'productcheck', component: ProductcheckComponent },
  { path: 'login', component: LoginSignupComponent },
  { path: 'shop', component: ProductsComponent },
  { path: 'buyorder', component: BuyorderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'finalpage', component: FinalpageComponent },
  { path: 'account', component: AccountComponent },
  { path: 'about', component: AboutComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
