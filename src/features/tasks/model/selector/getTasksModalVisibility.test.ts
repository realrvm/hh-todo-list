import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/rtk-provider";
import { getTasksModalVisibility } from "./getTasksModalVisibility";

describe("getTasksModalVisibility.test", () => {
  test("should toggle getTasksModalVisibility value", () => {
    const state: DeepPartial<StateSchema> = {
      tasksModal: {
        isOpen: true,
      },
    };

    expect(getTasksModalVisibility(state as StateSchema)).toBe(true);
  });
});
