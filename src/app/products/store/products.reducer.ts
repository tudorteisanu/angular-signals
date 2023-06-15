import {
  Action,
  createReducer,
  on,
} from '@ngrx/store';
import { productsInitialState } from './products.state';
import { fetchProductsAction, fetchProductsFailureAction, fetchProductsSuccessAction } from './actions/fetchProducts.action';
import { ProductsStateInterface } from '../types/productState.type';


export const productsReducer = createReducer(
  productsInitialState,
  on(
    fetchProductsAction,
    (state): ProductsStateInterface => ({
      ...state,
      isFetching: true,
    }),
  ),
  on(
    fetchProductsSuccessAction,
    (state, action): ProductsStateInterface => ({
      ...state,
      items: action.items,
      isFetching: false
    }),
  ),
  on(
    fetchProductsFailureAction,
    (state, action): ProductsStateInterface => ({
      ...state,
      error: action.error,
    }),
  ),
)

export function reducers(state: ProductsStateInterface, action: Action) {
  return productsReducer(state, action);

}
