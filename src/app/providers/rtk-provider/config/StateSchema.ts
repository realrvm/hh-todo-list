import { EnhancedStore } from "@reduxjs/toolkit";
import { createReducerManager } from "./reducerManager";

// schemes
import { HRSchema } from "@/widgets/navbar";
import { TaskSchema } from "@/entities/task";
import { TasksModalSchema } from "@/features/tasks";
import { SidebarSchema } from "@/widgets/sidebar";
import { UserSchema } from "@/entities/user";
import { AuthModalSchema } from "@/features/auth/model/types";

export type StateSchema = {
  hr: HRSchema;
  tasksModal: TasksModalSchema;
  authModal: AuthModalSchema;
  sidebar: SidebarSchema;
  user: UserSchema;

  // async
  task?: TaskSchema[];
  taskDetails?: TaskSchema;
};

export type StateSchemaKeys = keyof StateSchema;

type ReducerManager = ReturnType<typeof createReducerManager>;

export interface StoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
