import { StateSchema } from "@/app/providers/rtk-provider";

export const getTask = (state: StateSchema) => state.task;
