import { MutationTree } from "vuex";
import { State, TaskItem } from "./state";

export enum MutationType {
  SetTasks = "SET_TASKS",
  CreateTask = "CREATE_TASK",
  RemoveTask = "REMOVE_TASK",
  UpdateTask = `UPDATE_TASK`,

  SetCreateModal = "SET_CREATE_MODAL",
  SetEditModal = "SET_EDIT_MODAL",
  SetRemoveModal = "SET_REMOVE_MODAL",
}

export type Mutations = {
  [MutationType.SetTasks](state: State, tasks: TaskItem[]): void;
  [MutationType.CreateTask](state: State, task: TaskItem): void;
  [MutationType.RemoveTask](
    state: State,
    task: Partial<TaskItem> & { id: number }
  ): void;
  [MutationType.UpdateTask](
    state: State,
    task: Partial<TaskItem> & { id: number }
  ): void;

  [MutationType.SetCreateModal](state: State, value: boolean): void;
  [MutationType.SetEditModal](
    state: State,
    value: { showModal: boolean; taskId: number | undefined }
  ): void;
  [MutationType.SetRemoveModal](
    state: State,
    value: { showModal: boolean; taskId: number | undefined }
  ): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.SetTasks](state, tasks) {
    state.tasks = tasks;
  },
  [MutationType.CreateTask](state, task) {
    state.tasks.push(task);
    state.showCreateModal = false;
  },
  [MutationType.RemoveTask](state, Task) {
    const task = state.tasks.findIndex((element) => element.id === Task.id);
    if (task === -1) return;
    //If Task exist in the state, remove it
    state.tasks.splice(task, 1);
    state.showRemoveModal = false;
  },
  [MutationType.UpdateTask](state, Task) {
    state.tasks = state.tasks.map((task) => {
      if (task.id === Task.id) {
        return { ...task, ...Task };
      }
      return task;
    });
    state.showEditModal = false;
  },

  [MutationType.SetCreateModal](state, value) {
    state.showCreateModal = value;
  },
  [MutationType.SetRemoveModal](state, value) {
    state.showRemoveModal = value.showModal;
    state.removeModalTaskId = value.taskId;
  },
  [MutationType.SetEditModal](state, value) {
    state.showEditModal = value.showModal;
    state.editModalTaskId = value.taskId;
  },
};