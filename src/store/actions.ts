import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from "./mutations";
import { State, TaskItem } from "./state";
import axios from "axios";

export enum ActionTypes {
  GetTaskItems = "GET_Task_ITEMS",
  CreateTask = "Create_Task",
  UpdateTask = "Edit_Task",
  RemoveTask = "Remove_Task",
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
  [ActionTypes.CreateTask](context: ActionAugments, task: TaskItem): void;
  [ActionTypes.UpdateTask](context: ActionAugments, task: TaskItem): void;
  [ActionTypes.RemoveTask](context: ActionAugments, taskId: number): void;
  [ActionTypes.SetCreateModal](context: ActionAugments): void;
  [ActionTypes.SetEditModal](context: ActionAugments): void;
};

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetTaskItems]({ commit }) {
    commit(MutationType.SetLoading, true);
    try {
      const response = await axios.get("http://localhost:3001/tasks");
      commit(MutationType.SetLoading, false);
      const tasks = response.data;
      commit(MutationType.SetTasks, tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  },
  async [ActionTypes.CreateTask]({ commit }, task) {
    try {
      const response = await axios.post("http://localhost:3001/tasks", task);
      const createdTask = response.data;
      commit(MutationType.CreateTask, createdTask);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  },
  async [ActionTypes.UpdateTask]({ commit }, task) {
    try {
      await axios.put(`http://localhost:3001/tasks/${task.id}`, task);
      commit(MutationType.UpdateTask, task);
    } catch (error) {
      console.error("Error editing task:", error);
    }
  },
  async [ActionTypes.RemoveTask]({ commit }, taskId) {
    try {
      await axios.delete(`http://localhost:3001/tasks/${taskId}`);
      commit(MutationType.RemoveTask, taskId);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  },
  async [ActionTypes.SetCreateModal]({ commit }) {
    commit(MutationType.SetCreateModal, true);
  },
  async [ActionTypes.SetEditModal]({ commit }) {
    commit(MutationType.SetEditModal, { showModal: true, taskId: 1 });
  },
};
