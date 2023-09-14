import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskSchema } from "../types";

const initialState: TaskSchema[] = [];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskSchema>) => {
      const index = state.findIndex((task) => task.id === action.payload.id);

      if (index === -1) {
        state.push(action.payload);
      } else {
        state.splice(index, 1, action.payload);
      }
    },
    removeTask: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((task) => task.id === action.payload);

      state.splice(index, 1);
    },
    editTask: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((task) => task.id === action.payload);

      const task = { ...state[index], completed: !state[index].completed };

      state.splice(index, 1, task);
    },
  },
});

export const { reducer: taskReducer, actions: taskActions } = taskSlice;
