import { ReducersMapObject } from "@reduxjs/toolkit";

import type { StateSchema } from "./StateSchema";

// reducers
import { hrReducer } from "@/widgets/navbar";
import { tasksModalReducer } from "@/features/tasks";

export const reducers: ReducersMapObject<StateSchema> = {
  hr: hrReducer,
  tasksModal: tasksModalReducer,
};
