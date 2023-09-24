import { taskDetailsActions, taskDetailsReducer } from "./taskDetailsSlice";
import { TaskSchema } from "@/entities/task";

describe("TaskDetailsSlice", () => {
  test("should set task details", () => {
    const state: TaskSchema = {
      id: "",
      title: "",
      description: "",
      priority: "",
      deadline: "",
      label: "",
      completed: false,
    };
    expect(taskDetailsReducer(state, taskDetailsActions.setTaskDetails({...state, completed: true}))).toEqual(
      {...state,completed: true},
    );
  });

  test("should reset task details", () => {
    const state: TaskSchema = {
      id: "",
      title: "",
      description: "",
      priority: "",
      deadline: "",
      label: "",
      completed: false,
    };
    expect(taskDetailsReducer(state, taskDetailsActions.reset())).toEqual(
      state,
    );
  });
});
