import * as BasketActions from './basket.actions';
import {BasketState} from "./basket";
import {createReducer, on} from '@ngrx/store';

export const initialState: BasketState = {
  products: []
};

export const basketReducer = createReducer(
  initialState,
  on(BasketActions.addToBasket, (state, {product}) => ({
    ...state,
    products: [...state.products, product],
  })),
  on(BasketActions.removeFromBasket, (state, {productId}) => ({
    ...state,
    products: state.products.filter((product) => product.id !== productId),
  })),
  on(BasketActions.updateQuantity, (state, {productId, quantity}) => ({
    ...state,
    products: state.products.map((product) =>
      product.id === productId ? {...product, quantity} : product
    ),
  }))
);
