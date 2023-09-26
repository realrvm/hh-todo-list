import { ReducersMapObject } from "@reduxjs/toolkit";

import type { StateSchema } from "./StateSchema";

// reducers
import { hrReducer } from "@/widgets/navbar";
import { tasksModalReducer } from "@/features/tasks";
import { sidebarReducer } from "@/widgets/sidebar";
import { userReducer } from "@/entities/user";
import { authModalReducer, authReducer } from "@/features/auth";

export const reducers: ReducersMapObject<StateSchema> = {
  hr: hrReducer,
  tasksModal: tasksModalReducer,
  authModal: authModalReducer,
  sidebar: sidebarReducer,
  user: userReducer,
  auth: authReducer,
};
