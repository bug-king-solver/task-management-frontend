import { GetterTree } from "vuex";
import { State, TaskItem } from "./state";

export type Getters = {
  totalTaskCount(state: State): number;
  getTaskById(state: State): (id: number) => TaskItem | undefined;
};

export const getters: GetterTree<State, State> & Getters = {
  totalTaskCount(state) {
    return state.tasks.length;
  },
  getTaskById: (state) => (id: number) => {
    return state.tasks.find((task) => task.id === id);
  },
};
