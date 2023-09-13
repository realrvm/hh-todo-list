import { TasksModalSchema } from "../types";
import { tasksModalActions, tasksModalReducer } from "./tasksModalSlice";

describe("tasksModalSlice.test", () => {
  test("should use open to set isOpen to true", () => {
    const state: TasksModalSchema = {
      isOpen: false,
    };

    expect(tasksModalReducer(state, tasksModalActions.open())).toEqual({
      isOpen: true,
    });
  });

  test("should use close to set isOpen to false", () => {
    const state: TasksModalSchema = {
      isOpen: true,
    };

    expect(tasksModalReducer(state, tasksModalActions.close())).toEqual({
      isOpen: false,
    });
  });
});
