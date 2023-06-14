import { createAction } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";

export const increaseCounterAction = createAction(
  ActionTypes.IncreaseCounter,
);
