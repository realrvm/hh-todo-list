import { StateSchema } from "@/app/providers/rtk-provider";
import { DeepPartial } from "@reduxjs/toolkit";

import { getExecution } from "./getExecution";

describe("getExecution", () => {
  test("should return execution tasks", () => {
    const state: DeepPartial<StateSchema> = {
      sidebar: {
        execId: 3,
        priorityId: 0,
      },
    };

    expect(getExecution(state as StateSchema)).toBe(3);
  });
});
