import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

    constructor() { }

    public count = 0;
    addToCart() {
        this.count =  this.count+1; 
        return this.count; 
    }

    clearCart() {
        return this.count = 0;
    }

    getCart(){
      return this.count;
    }
}

