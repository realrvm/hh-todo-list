import { createSelector } from "@reduxjs/toolkit";

import { getSidebar } from "../getSidebar/getSidebar";

import type { SidebarSchema } from "../../types";

export const getPriorities = createSelector(
  getSidebar,
  (sidebar: Pick<SidebarSchema, "priorityId">) => sidebar.priorityId,
);
