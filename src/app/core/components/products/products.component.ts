import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

import {Product} from "../../../../models/product";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(
    private readonly productsService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.products$ = this.productsService.getProductsData();
  }
}
