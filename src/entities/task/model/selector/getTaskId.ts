import { createSelector } from "@reduxjs/toolkit";

import { TaskSchema } from "../types";
import { getTask } from "./getTask";

export const getTaskId = createSelector(getTask, (task: TaskSchema) => task.id);
