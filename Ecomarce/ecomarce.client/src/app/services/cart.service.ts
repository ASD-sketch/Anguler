import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  constructor() {
    const savedCart = localStorage.getItem('cart');
    this.cart = savedCart ? JSON.parse(savedCart) : [];
  }

  getCart(): any[] {
    return this.cart;
  }

  addToCart(product: any): void {
    this.cart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeFromCart(index: number): void {
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  clearCart(): void {
    this.cart = [];
    localStorage.removeItem('cart');
  }
}
