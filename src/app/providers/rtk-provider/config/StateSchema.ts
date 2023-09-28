import { EnhancedStore } from "@reduxjs/toolkit";
import { createReducerManager } from "./reducerManager";

// schemes
import { HRSchema } from "@/widgets/navbar";
import { TaskSchema } from "@/entities/task";
import { TasksModalSchema } from "@/features/tasks";
import { SidebarSchema } from "@/widgets/sidebar";
import { UserSchema } from "@/entities/user";
import { AuthModalSchema, AuthSchema } from "@/features/auth/model/types";
import { AxiosInstance } from "axios";

export type StateSchema = {
  hr: HRSchema;
  tasksModal: TasksModalSchema;
  authModal: AuthModalSchema;
  sidebar: SidebarSchema;
  user: UserSchema;
  auth: AuthSchema;

  // async
  task?: TaskSchema[];
  taskDetails?: TaskSchema;
};

export type StateSchemaKeys = keyof StateSchema;

type ReducerManager = ReturnType<typeof createReducerManager>;

export type StoreWithManager = {
  reducerManager: ReducerManager;
} & EnhancedStore<StateSchema>;

export type ThunkExtraArgs = {
  api: AxiosInstance;
};

export type ThunkConfig<T> = {
  rejectValue: T;
  extra: ThunkExtraArgs;
};
