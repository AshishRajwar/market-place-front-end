import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { item } from './models/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  cartItems: item[]=[];
  private itemsUrl = 'http://localhost:8080/home'

  constructor(
    private http: HttpClient) {}
  
  getItems(): Observable<item[]> {
    return this.http.get<item[]>(this.itemsUrl)
  }

  addToCart(item: item): void {
    this.cartItems.push(item);
    console.log("add to cart method service" + this.cartItems);
    console.log( this.cartItems);
  }

  removeFromCart(cartItem: item): void {
    this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
    this.cartItems = this.cartItems.filter(item => item!=cartItem);
  }

}
