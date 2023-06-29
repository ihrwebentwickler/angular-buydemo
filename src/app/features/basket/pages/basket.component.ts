import {Component} from '@angular/core';

import {AsyncPipe, NgFor, NgIf} from "@angular/common";
import {BasketService} from "../../../shared/services/basket/basket.service";
import {Observable} from 'rxjs';
import {Product} from "../../../shared/models/product";

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  templateUrl: './basket.component.html'
})
export class BasketComponent {
  products$!: Observable<Product[]>;

  constructor(private basketService: BasketService) {
  }

  ngOnInit() {
    this.products$ = this.basketService.getProducts();
    this.products$.subscribe(d => {
      console.log(d);
    })
  }

  decreaseQuantity(product: Product) {
    const newQuantity = Math.max(product.quantity - 1, 1);
    this.basketService.updateQuantity(product.id, newQuantity);
  }

  increaseQuantity(product: Product) {
    const newQuantity = Math.min(product.quantity + 1, 10);
    this.basketService.updateQuantity(product.id, newQuantity);
  }

  removeFromBasket(product: Product) {
    this.basketService.removeFromBasket(product.id);
  }
}
