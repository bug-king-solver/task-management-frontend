import { TaskItem } from "../store/state";

const tasks: TaskItem[] = [
  {
    id: 1,
    taskDesc: "Task 1",
    createdBy: "jack",
    assignedTo: "toby",
    editing: false,
  },
  {
    id: 2,
    taskDesc: "Task 2",
    createdBy: "janny",
    assignedTo: "jack",
    editing: false,
  },
  {
    id: 3,
    taskDesc: "Task 3",
    createdBy: "toby",
    assignedTo: "janny",
    editing: false,
  },
];

export const tasksJSON = JSON.stringify(tasks);
