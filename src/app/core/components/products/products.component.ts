import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgFor, NgIf} from '@angular/common';

import {BasketService} from "../../../shared/services/basket/basket.service";
import {Observable} from "rxjs";
import {Product} from "../../../shared/models/product";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf]
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(
    private readonly basketService: BasketService,
    private readonly productsService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.products$ = this.productsService.getProductsData();
  }

  onClickAddToBasket(product: Product) {
    this.basketService.addToBasket(product);
  }
}
