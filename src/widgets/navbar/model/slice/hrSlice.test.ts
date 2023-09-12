import { HRSchema } from "../types";
import { hrActions, hrReducer } from "./hrSlice";

describe("hrSlice", () => {
  test("should toggle value", () => {
    const state: HRSchema = {
      isOpen: true,
    };

    expect(hrReducer(state, hrActions.toggle())).toEqual({
      isOpen: false,
    });
  });
});
