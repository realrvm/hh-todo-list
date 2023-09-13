import { lazy } from "react";

const TasksModal = lazy(() => import("./ui/TasksModal"));

export type { TasksModalSchema } from "./model/types";

export {
  tasksModalReducer,
  tasksModalActions,
} from "./model/slice/tasksModalSlice";

export { getTasksModalVisibility } from "./model/selector/getTasksModalVisibility";

export { TasksModal };
