import { Outlet } from "react-router-dom";

import { taskReducer } from "@/entities/task";
import { taskDetailsReducer } from "@/pages/task-details";
import {
  ModuleLoader,
  ReducersList,
} from "@/shared/lib/components/ModuleLoader";

const initialReducers: ReducersList = {
  task: taskReducer,
  taskDetails: taskDetailsReducer,
};

export const AppRouter = () => {
  return (
    <ModuleLoader reducers={initialReducers}>
      <Outlet />
    </ModuleLoader>
  );
};
