import { EnhancedStore } from "@reduxjs/toolkit";
import { createReducerManager } from "./reducerManager";

// schemes
import { HRSchema } from "@/widgets/navbar";
import { TaskSchema } from "@/entities/task";
import { TasksModalSchema } from "@/features/tasks";
import { SidebarSchema } from "@/widgets/sidebar";

export type StateSchema = {
  hr: HRSchema;
  tasksModal: TasksModalSchema;
  sidebar: SidebarSchema;

  // async
  task?: TaskSchema[];
  taskDetails?: TaskSchema;
};

export type StateSchemaKeys = keyof StateSchema;

type ReducerManager = ReturnType<typeof createReducerManager>;

export interface StoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
