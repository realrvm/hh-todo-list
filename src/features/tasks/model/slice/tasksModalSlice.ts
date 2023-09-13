import { createSlice } from "@reduxjs/toolkit";
import { TasksModalSchema } from "../types";

const initialState: TasksModalSchema = {
  isOpen: false,
};

const tasksModalSlice = createSlice({
  name: "tasksModal",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { reducer: tasksModalReducer, actions: tasksModalActions } =
  tasksModalSlice;
