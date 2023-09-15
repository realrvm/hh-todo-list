import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import type { TaskSchema } from "@/entities/task";

const initialState: TaskSchema = {
  id: "",
  title: "",
  description: "",
  priority: "",
  deadline: "",
  label: "",
  completed: false,
};

const taskDetailsSlice = createSlice({
  name: "taskDetails",
  initialState,
  reducers: {
    setTaskDetails: (state, action: PayloadAction<TaskSchema>) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.priority = action.payload.priority;
      state.deadline = action.payload.deadline;
      state.label = action.payload.label;
      state.completed = action.payload.completed;
    },
    reset: (state) => {
      state.id = "";
      state.title = "";
      state.description = "";
      state.priority = "";
      state.deadline = "";
      state.label = "";
      state.completed = false;
    },
  },
});

export const { reducer: taskDetailsReducer, actions: taskDetailsActions } =
  taskDetailsSlice;
