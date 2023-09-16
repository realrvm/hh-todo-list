import { createSelector } from "@reduxjs/toolkit";

import { getSidebar } from "../getSidebar/getSidebar";

import type { SidebarSchema } from "../../types";

export const getExecution = createSelector(
  getSidebar,
  (sidebar: Pick<SidebarSchema, "execId">) => sidebar.execId,
);
