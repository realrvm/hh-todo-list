import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import type { SidebarSchema } from "../types";

const initialState: SidebarSchema = {
  execId: 3,
  priorityId: 0,
};

const sidebar_slice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    selectExecution: (state, action: PayloadAction<number>) => {
      state.execId = action.payload;
    },
    selectPriority: (state, action: PayloadAction<number>) => {
      state.priorityId = action.payload;
    },
    reset: (state) => {
      state.priorityId = 0;
    },
  },
});

export const { reducer: sidebarReducer, actions: sidebarActions } =
  sidebar_slice;
