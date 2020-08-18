import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';


// services
import {CartService } from './cart.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
