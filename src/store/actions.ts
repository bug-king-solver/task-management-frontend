import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from "./mutations";
import { State } from "./state";

export enum ActionTypes {
  GetTaskItems = "GET_Task_ITEMS",
}

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.GetTaskItems](context: ActionAugments): void;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetTaskItems]({ commit }) {
    await sleep(1000);

    commit(MutationType.SetTasks, [
      {
        id: 1,
        task: "The programing language should have full typescript support",
        createdBy: "Emmanuel John",
        assignedTo: "Saviour Peter",
        editing: false,
      },
      {
        id: 2,
        task: "Vue 3 Task Management App with TypeScript and VueX 4",
        createdBy: "Arman Abkar",
        assignedTo: "Arman Abkar",
        editing: false,
      },
      {
        id: 3,
        task: "Eu Lorem esse sint irure do duis nisi commodo nostrud. Eu dolore Lorem do consectetur dolor esse nostrud Lorem id nulla. Id tempor esse in sint non consectetur culpa. Tempor pariatur velit occaecat sunt nostrud voluptate aliquip officia nulla eu eu reprehenderit. Ipsum aliqua mollit cupidatat ex.",
        createdBy: "Emmanuel John",
        assignedTo: "Jon Doe",
        editing: false,
      },
    ]);
  },
};
