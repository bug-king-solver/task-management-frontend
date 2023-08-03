<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="relative bg-gray-50 dark:bg-gray-700 rounded-lg p-8 max-w-md">
      <form class="space-y-6" @submit.prevent="removeTask">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
          Edit Task
        </h5>
        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Confirm
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
import { useStore } from "@/store";
import { MutationType } from "@/store/mutations";
import { ActionTypes } from "@/store/actions";
export default {
  name: "RemoveModal",
  props: {
    id: { type: Number, required: true },
  },
  setup(props: any) {
    const store = useStore();
    const removeTask = () => {
      store.dispatch(ActionTypes.RemoveTask, props.id);
    };
    const closeModal = () => {
      store.commit(MutationType.SetRemoveModal, {
        showModal: false,
        taskId: undefined,
      });
    };
    return {
      removeTask,
      closeModal,
    };
  },
};
</script>
