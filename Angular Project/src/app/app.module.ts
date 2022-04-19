import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductcheckComponent } from './productcheck/productcheck.component';
import { ShopComponent } from './shop/shop/shop.component';
import { ProductsComponent } from './products/products.component';
import { BuyorderComponent } from './buyorder/buyorder.component';
import { FinalpageComponent } from './finalpage/finalpage.component';
import { AccountComponent } from './account/account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';









@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginSignupComponent,
    ProductcheckComponent,
    ShopComponent,
    ProductsComponent,
    BuyorderComponent,
    FinalpageComponent,
    AccountComponent,
    AboutComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
