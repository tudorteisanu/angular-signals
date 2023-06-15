import { ProductsStateInterface } from "../types/productState.type";


export const productsInitialState: ProductsStateInterface = {
  items: [],
  isFetching: false,
  error: null
}
