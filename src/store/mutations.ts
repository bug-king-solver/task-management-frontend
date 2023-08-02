import { MutationTree } from "vuex";
import { State, TaskItem } from "./state";

export enum MutationType {
  SetTasks = "SET_TASKS",
}

export type Mutations = {
  [MutationType.SetTasks](state: State, tasks: TaskItem[]): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.SetTasks](state, tasks) {
    state.tasks = tasks;
  },
};
