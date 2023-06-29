import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';

import {addToBasket, removeFromBasket, updateQuantity} from '../../../stores/basket/basket.actions';
import {Product} from "../../models/product";
import {Observable, of} from "rxjs";
import {BasketState} from "../../../stores/basket/basket";

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private storeBasket!: Store<BasketState>;

  constructor() {
  }

  addToBasket(product: Product) {
    this.storeBasket.dispatch(addToBasket({product}));
  }

  removeFromBasket(productId: number) {
    this.storeBasket.dispatch(removeFromBasket({productId}));
  }

  updateQuantity(productId: number, quantity: number) {
    this.storeBasket.dispatch(updateQuantity({productId, quantity}));
  }

  getProducts(): Observable<Product[]> {
    return this.storeBasket.select((state) => state.products);
  }

  getBasketProductsCount(): Observable<number> {
    if (this.storeBasket) {
      return this.storeBasket.pipe(
        select(state => state?.products?.length ?? 0)
      );
    } else {
      return of(0)
    }
  }
}
