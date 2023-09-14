import { getTask } from "./getTask";
import { StateSchema } from "@/app/providers/rtk-provider";

export const getTaskId = (state: StateSchema) => getTask(state)?.id;
