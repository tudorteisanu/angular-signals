import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { ProductInterface } from "../../types/product.interface";
import { BackendError } from "src/app/shared/types/backendError.interface";

export const fetchProductsAction = createAction(
  ActionTypes.FetchProducts,
);


export const fetchProductsSuccessAction = createAction(
  ActionTypes.FetchProductsSuccess,
  props<{ items: ProductInterface[] }>()
);


export const fetchProductsFailureAction = createAction(
  ActionTypes.FetchProductsFailure,
  props<{ error: BackendError | null }>()
);
