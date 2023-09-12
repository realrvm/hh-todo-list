import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/rtk-provider";
import { getHRToggledValue } from "./getHRToggledValue";

describe("getHRToggleValue", () => {
  test("should toggle value", () => {
    const state: DeepPartial<StateSchema> = {
      hr: {
        isOpen: true,
      },
    };

    expect(getHRToggledValue(state as StateSchema)).toBe(true);
  });
});
