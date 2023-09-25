import { StateSchema } from "@/app/providers/rtk-provider";

export const getUserData = (state: StateSchema) => state.user.userData;
