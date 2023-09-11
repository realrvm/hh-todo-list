import { EnhancedStore } from "@reduxjs/toolkit";

import { createReduxStore } from "../config/root";
import { createReducerManager } from "../config/reducerManager";

import { TaskSchema } from "@/entities/task";

const store = createReduxStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


type ReducerManager = ReturnType<typeof createReducerManager>;

export interface StoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export type StateSchema = {
  task: TaskSchema;
};

export type StateSchemaKeys = keyof StateSchema;
