import { UserSchema } from "../types";
import { userActions, userReducer } from "./userSlice";

describe("userSlice.test", () => {
  test("should set user data", () => {
    const state: UserSchema = {};

    expect(
      userReducer(
        state,
        userActions.setUserData({ id: "1", username: "test" }),
      ),
    ).toEqual({ userData: { id: "1", username: "test" } });
  });

  test("should remove user data", () => {
    const state: UserSchema = {
      userData: {
        id: "2",
        username: "another_tester",
      },
    };

    expect(userReducer(state, userActions.logout())).toEqual({
      userData: undefined,
    });
  });
});
