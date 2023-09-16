import { DeepPartial } from "@reduxjs/toolkit";

import { getPriorities } from "./getPriorities";
import { StateSchema } from "@/app/providers/rtk-provider";

describe("getPriorities", () => {
  test("should return priorities", () => {
    const state: DeepPartial<StateSchema> = {
      sidebar: {
        execId: 3,
        priorityId: 0,
      },
    };

    expect(getPriorities(state as StateSchema)).toBe(0);
  });
});
