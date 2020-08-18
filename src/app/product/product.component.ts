import { Component, OnDestroy,OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  cart: any;
  public fileUrl;
  constructor(private cartService: CartService) {}

  ngOnInit(){
    this.getCart();
    
  }
  getCart(): void {
    this.cart = this.cartService.getCart();
  }

  addToCart(): void {
    this.cart = this.cartService.addToCart();
  }

  emptyCart(): void {
    this.cartService.clearCart();
  }

}
