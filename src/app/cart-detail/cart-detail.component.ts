import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html'
})
export class CartDetailComponent implements OnInit {

  subscription: Subscription;
  cart: any;
  constructor(private cartService: CartService) {}

  ngOnInit(){
    this.getCart();
  }

  getCart(): void {
    // clear message
    this.cart = this.cartService.getCart();
  }

  addToCart(): void {
    this.cart = this.cartService.addToCart();
  }

  emptyCart(): void {
    // clear message
    this.cart = this.cartService.clearCart();
  }

}
