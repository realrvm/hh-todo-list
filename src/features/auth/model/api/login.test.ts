import { TestAsyncThunk } from "@/shared/lib/tests/testAsyncThunk";
import { login } from "./login";
import { userActions } from "@/entities/user";

describe("login", () => {
  test("should login", async () => {
    const userValue = { id: "1", username: "roman" };

    const thunk = new TestAsyncThunk(login);

    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const result = await thunk.callThunk({
      username: "roman",
      password: "123",
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setUserData(userValue)
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userValue);
  });

  test("error login", async () => {
    const thunk = new TestAsyncThunk(login);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({
      username: "roman",
      password: "123",
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("Invalid username or password");
  });
});
