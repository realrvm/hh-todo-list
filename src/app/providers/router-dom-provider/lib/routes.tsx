import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { Routes } from "../types";
import { TasksList } from "@/pages/tasks-list";
import { TaskDetails } from "@/pages/task-details";
import { App } from "@/app/App";

const routes: Record<Routes, JSX.Element> = {
  [Routes.TasksList]: (
    <Suspense fallback={<>Loading...</>}>
      <TasksList />
    </Suspense>
  ),
  [Routes.TaskDetails]: (
    <Suspense fallback={<>Loading...</>}>
      <TaskDetails />
    </Suspense>
  ),
};

export const router = createBrowserRouter([
  {
    element: <App />,
    children: Object.entries(routes).map(([path, element]) => ({
      path,
      element,
    })),
  },
]);
