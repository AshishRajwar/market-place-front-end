import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { item } from '../models/item.interface';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  
  cartItems: item[]=[];
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.cartItems=this.itemService.cartItems;
    // this.itemService.getItems().subscribe(items => {
    //   this.cartItems=items;
    // });
  }

  removeFromCart(item: item): void {
    this.cartItems.splice(this.cartItems.indexOf(item), 1);
    this.itemService.removeFromCart(item);
  }

}
