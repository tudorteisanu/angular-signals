import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterStateInterface } from "../types/counterState.interface";

export const counterFeatureSelector =
  createFeatureSelector<CounterStateInterface>('dashboard');

export const counterSelector = createSelector(
  counterFeatureSelector,
  (state: CounterStateInterface) => state.value,
);
