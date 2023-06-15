import {
  Action,
  createReducer,
  on,
} from '@ngrx/store';
import { counterInitialState } from "./counter.state";
import { CounterStateInterface } from "../types/counterState.interface";
import { increaseCounterAction } from './actions/increaseCounter.action';
import { degreaseCounterAction } from './actions/degreaseCounter.action';
import { resetCounterAction } from './actions/resetCounter.action';


export const counterReducer = createReducer(
  counterInitialState,
  on(
    increaseCounterAction,
    (state): CounterStateInterface => ({
      ...state,
      value: state.value + 1,
    }),
  ),
  on(
    degreaseCounterAction,
    (state): CounterStateInterface => ({
      ...state,
      value: state.value - 1,
    }),
  ),
  on(
    resetCounterAction,
    (state): CounterStateInterface => ({
      ...state,
      value: 0,
    }),
  ),
)

export function reducers(state: CounterStateInterface, action: Action) {
  return counterReducer(state, action);
}
