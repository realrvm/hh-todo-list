export type { UserSchema, User } from "./model/types/";

export { userReducer, userActions } from "./model/slice/userSlice";

export { getUserData } from "./model/selector/getUserData";
