import { MutationTree } from "vuex";
import { State, TaskItem } from "./state";

export enum MutationType {
  CreateTask = "CREATE_TASK",
  SetTasks = "SET_TASKS",
  RemoveTask = "REMOVE_TASK",
  SetCreateModal = "SET_CREATE_MODAL",
}

export type Mutations = {
  [MutationType.CreateTask](state: State, task: TaskItem): void;
  [MutationType.SetTasks](state: State, tasks: TaskItem[]): void;
  [MutationType.SetCreateModal](state: State, value: boolean): void;
  [MutationType.RemoveTask](
    state: State,
    task: Partial<TaskItem> & { id: number }
  ): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.CreateTask](state, task) {
    state.tasks.push(task);
  },
  [MutationType.SetTasks](state, tasks) {
    state.tasks = tasks;
  },
  [MutationType.SetCreateModal](state, value) {
    state.showCreateModal = value;
  },
  [MutationType.RemoveTask](state, Task) {
    const task = state.tasks.findIndex((element) => element.id === Task.id);
    if (task === -1) return;
    //If Task exist in the state, remove it
    state.tasks.splice(task, 1);
  },
};
