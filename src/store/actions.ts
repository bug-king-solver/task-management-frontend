import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from "./mutations";
import { State, TaskItem } from "./state";
import { tasksJSON } from "../data/idnex";

export enum ActionTypes {
  GetTaskItems = "GET_Task_ITEMS",
  SetCreateModal = "SET_CREATE_MODAL",
  SetEditModal = "SET_EDIT_MODAL",
}

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.GetTaskItems](context: ActionAugments): void;
  [ActionTypes.SetCreateModal](context: ActionAugments): void;
  [ActionTypes.SetEditModal](context: ActionAugments): void;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetTaskItems]({ commit }) {
    commit(MutationType.SetLoading, true);
    await sleep(1000);
    const tasksFromJSON: TaskItem[] = JSON.parse(tasksJSON);
    commit(MutationType.SetLoading, false);
    commit(MutationType.SetTasks, tasksFromJSON);
  },
  async [ActionTypes.SetCreateModal]({ commit }) {
    commit(MutationType.SetCreateModal, true);
  },
  async [ActionTypes.SetEditModal]({ commit }) {
    commit(MutationType.SetEditModal, { showModal: true, taskId: 1 });
  },
};
