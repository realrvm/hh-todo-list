import { SidebarSchema } from "../types";
import { sidebarActions, sidebarReducer } from "./sidebarSlice";

const state: SidebarSchema = {
  execId: 3,
  priorityId: 0,
};

describe("sidebarSlice", () => {
  test("should select execution tasks", () => {
    expect(sidebarReducer(state, sidebarActions.selectExecution(1))).toEqual({
      ...state,
      execId: 1,
    });
  });

  test("should select priority tasks", () => {
    expect(sidebarReducer(state, sidebarActions.selectPriority(1))).toEqual({
      ...state,
      priorityId: 1,
    });
  });

  test("should reset priority tasks", () => {
    expect(sidebarReducer(state, sidebarActions.reset())).toEqual({
      ...state,
      priorityId: 0,
    });
  });
});
