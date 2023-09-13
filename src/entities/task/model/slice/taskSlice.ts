import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskSchema } from "../types";

const initialState: TaskSchema = {
  id: "",
  title: "",
  priority: "",
  deadline: "",
  description: "",
  label: "",
  completed: false,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTaskId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
  },
});

export const { reducer: taskReducer, actions: taskActions } = taskSlice;
