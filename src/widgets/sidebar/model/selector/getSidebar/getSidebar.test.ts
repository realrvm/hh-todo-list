import { DeepPartial } from "@reduxjs/toolkit";

import { getSidebar } from "./getSidebar";
import { StateSchema } from "@/app/providers/rtk-provider";

describe("getSidebar", () => {
  test("should return sidebar", () => {
    const state: DeepPartial<StateSchema> = {
      sidebar: {
        execId: 3,
        priorityId: 0,
      },
    };

    expect(getSidebar(state as StateSchema)).toEqual({
      execId: 3,
      priorityId: 0,
    });
  });
});
