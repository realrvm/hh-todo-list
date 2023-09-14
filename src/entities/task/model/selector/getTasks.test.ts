import { StateSchema } from "@/app/providers/rtk-provider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getTasks } from "./getTasks";

const tasks = [
  {
    id: "1",
    title: "test",
    description: "test",
    priority: "test",
    label: "test",
    deadline: "test",
  },
];

describe("getTasks", () => {
  test("should return tasks", () => {
    const state: DeepPartial<StateSchema> = {
      task: tasks,
    };
    expect(getTasks(state as StateSchema)).toEqual(tasks);
  });
});
