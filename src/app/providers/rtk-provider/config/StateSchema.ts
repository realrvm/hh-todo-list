import { EnhancedStore } from "@reduxjs/toolkit";
import { createReducerManager } from "./reducerManager";

// schemes
import { HRSchema } from "@/widgets/navbar";
import { TaskSchema } from "@/entities/task";

export type StateSchema = {
  hr: HRSchema;
  task: TaskSchema;
};

export type StateSchemaKeys = keyof StateSchema;

type ReducerManager = ReturnType<typeof createReducerManager>;

export interface StoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
