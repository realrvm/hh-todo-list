import { configureStore } from "@reduxjs/toolkit";

import { createReducerManager } from "./reducerManager";
import { reducers } from "./reducers";
import { StateSchema, StoreWithManager } from "../types";
import { IS_DEV } from "@/shared/lib/constants";

const reducer = createReducerManager(reducers);

export function createReduxStore(initialState?: StateSchema) {
  const store = configureStore<StateSchema>({
    // todo
    // @ts-ignore
    reducer: reducer.reduce,
    devTools: IS_DEV,
    preloadedState: initialState,
  }) as StoreWithManager;

  store.reducerManager = reducer;

  return store;
}
