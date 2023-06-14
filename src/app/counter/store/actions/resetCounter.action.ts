import { createAction } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";

export const resetCounterAction = createAction(
  ActionTypes.ResetCounter,
);
