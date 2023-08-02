<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="relative bg-gray-50 dark:bg-gray-700 rounded-lg p-8 max-w-md">
      <form class="space-y-6" @submit.prevent="createTask">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
          Add New Task
        </h5>
        <div>
          <label
            for="taskDesc"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Task Descripttion</label
          >
          <input
            type="text"
            name="taskDesc"
            id="taskDesc"
            v-model="taskDesc"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            for="createdBy"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Created By</label
          >
          <input
            type="text"
            name="createdBy"
            id="createdBy"
            v-model="createdBy"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            for="assignedTo"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Assigned To</label
          >
          <input
            type="text"
            name="assignedTo"
            id="assignedTo"
            v-model="assignedTo"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>

        <button
          @click="closeModal"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Cancel
        </button>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs } from "vue";
import { useStore } from "@/store";
import { TaskItem } from "@/store/state";
import { MutationType } from "@/store/mutations";
export default {
  name: "CreateModal",
  setup() {
    const state = reactive({
      taskDesc: "",
      createdBy: "",
      assignedTo: "",
    });
    const store = useStore();

    const createTask = () => {
      if (
        state.taskDesc === "" ||
        state.createdBy === "" ||
        state.assignedTo === ""
      )
        return;

      const task: TaskItem = {
        id: Date.now(),
        taskDesc: state.taskDesc,
        createdBy: state.createdBy,
        assignedTo: state.assignedTo,
        editing: false,
      };

      store.commit(MutationType.CreateTask, task);

      state.taskDesc = "";
      state.createdBy = "";
      state.assignedTo = "";
    };

    const closeModal = () => {
      store.commit(MutationType.SetCreateModal, false);
    };

    return { closeModal, ...toRefs(state), createTask };
  },
};
</script>
