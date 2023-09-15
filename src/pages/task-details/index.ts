import { lazy } from "react";

const TaskDetails = lazy(() => import("./ui/TaskDetails"));

export { TaskDetails };
export {
  taskDetailsReducer,
  taskDetailsActions,
} from "./model/slice/taskDetailsSlice";

export { getTaskDetails } from "./model/selector/getTaskDetails";
