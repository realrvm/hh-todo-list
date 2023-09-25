import { AuthModalSchema } from "../../types";
import { authModalActions, authModalReducer } from "./authModalSlice";

describe("AuthModalSlice.test", () => {
  test("should use open to set isOpen to true", () => {
    const state: AuthModalSchema = {
      isOpen: false,
    };

    expect(authModalReducer(state, authModalActions.open())).toEqual({
      isOpen: true,
    });
  });

  test("should use close to set isOpen to false", () => {
    const state: AuthModalSchema = {
      isOpen: true,
    };

    expect(authModalReducer(state, authModalActions.close())).toEqual({
      isOpen: false,
    });
  });
});
