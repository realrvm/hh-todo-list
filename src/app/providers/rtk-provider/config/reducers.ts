import { ReducersMapObject } from "@reduxjs/toolkit";

import type { StateSchema } from "./StateSchema";

// reducers
import { taskReducer } from "@/entities/task";
import { hrReducer } from "@/widgets/navbar";
import { tasksModalReducer } from "@/features/tasks";

export const reducers: ReducersMapObject<StateSchema> = {
  task: taskReducer,
  hr: hrReducer,
  tasksModal: tasksModalReducer,
};
