import { ReducersMapObject } from "@reduxjs/toolkit";

import type { StateSchema } from "../types";

import { taskReducer } from "@/entities/task";

export const reducers: ReducersMapObject<StateSchema> = {
  task: taskReducer,
};
