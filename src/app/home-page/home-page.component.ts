import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { item } from '../models/item.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  items: item[] = [];
  
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    this.itemService.getItems().subscribe(items => {
      this.items=items;
    });
  }

  addToCart(item: item): void {
    console.log("add to cart method");
    this.itemService.addToCart(item);
  }

}
