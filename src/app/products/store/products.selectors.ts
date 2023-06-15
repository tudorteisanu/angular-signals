import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsStateInterface } from "../types/productState.type";

export const productsFeatureSelector =
  createFeatureSelector<ProductsStateInterface>('products');

export const productsSelector = createSelector(
  productsFeatureSelector,
  (state: ProductsStateInterface) => state.items,
);


export const isFetchingSelector = createSelector(
  productsFeatureSelector,
  (state: ProductsStateInterface) => state.isFetching,
);


export const errorSelector = createSelector(
  productsFeatureSelector,
  (state: ProductsStateInterface) => state.error,
);

