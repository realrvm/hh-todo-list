import { StateSchema } from "@/app/providers/rtk-provider";

export const getTasks = (state: StateSchema) => state.task;
