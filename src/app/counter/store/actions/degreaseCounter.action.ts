import { createAction } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";

export const degreaseCounterAction = createAction(
  ActionTypes.DegreaseCounter,
);
