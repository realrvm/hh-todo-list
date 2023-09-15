import { StateSchema } from "@/app/providers/rtk-provider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getTaskDetails } from "./getTaskDetails";

describe("getTaskDetails", () => {
  test("should return task details", () => {
    const state: DeepPartial<StateSchema> = {
      taskDetails: {
        id: "1",
        title: "some title",
        description: "some description",
        label: "some status",
        priority: "some priority",
        deadline: "some deadline",
      },
    };

    expect(getTaskDetails(state as StateSchema)).toEqual({
      id: "1",
      title: "some title",
      description: "some description",
      label: "some status",
      priority: "some priority",
      deadline: "some deadline",
    });
  });
});
