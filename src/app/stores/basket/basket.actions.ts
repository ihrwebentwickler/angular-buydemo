import { createAction, props } from '@ngrx/store';
import {Product} from "./product";

export const addToBasket = createAction(
  '[Basket] Add to Basket',
  props<{ product: Product }>()
);

export const removeFromBasket = createAction(
  '[Basket] Remove from Basket',
  props<{ productId: number }>()
);

export const updateQuantity = createAction(
  '[Basket] Update Quantity',
  props<{ productId: number, quantity: number }>()
);
