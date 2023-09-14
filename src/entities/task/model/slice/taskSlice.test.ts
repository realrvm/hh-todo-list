import { TaskSchema } from "../types";
import { taskActions, taskReducer } from "./taskSlice";

const tasks: TaskSchema[] = [
  {
    id: "1",
    title: "test",
    description: "test",
    priority: "test",
    label: "test",
    deadline: "test",
    completed: false,
  },
];

describe("taskSlice", () => {
  test("should add task", () => {
    const task: TaskSchema = {
      id: "2",
      title: "test2",
      description: "test2",
      priority: "test2",
      label: "test2",
      deadline: "test2",
      completed: false,
    };
    expect(taskReducer(tasks, taskActions.addTask(task))).toEqual([
      ...tasks,
      task,
    ]);
  });

  test("should remove task", () => {
    expect(taskReducer(tasks, taskActions.removeTask("1"))).toEqual([]);
  });

  test("should edit task", () => {
    expect(taskReducer(tasks, taskActions.editTask("1"))).toEqual([
      {
        id: "1",
        title: "test",
        description: "test",
        priority: "test",
        label: "test",
        deadline: "test",
        completed: true,
      },
    ]);
  });
});
