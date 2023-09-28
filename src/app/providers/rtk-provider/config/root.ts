import { CombinedState, Reducer, configureStore } from "@reduxjs/toolkit";

import { createReducerManager } from "./reducerManager";
import { reducers } from "./reducers";
import { IS_DEV } from "@/shared/lib/constants";

import type { StateSchema, StoreWithManager, ThunkExtraArgs } from "./StateSchema";
import { $api } from "@/shared/api/api";

const reducer = createReducerManager(reducers);

export function createReduxStore(initialState?: StateSchema) {
  const extraArgument: ThunkExtraArgs = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducer.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: IS_DEV,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument,
        },
      }),
  }) as StoreWithManager;

  store.reducerManager = reducer;

  return store;
}
