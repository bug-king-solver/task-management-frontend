<template>
  <div class="flex justify-center">
    <div class="w-7/12">
      <div class="mt-10 mb-10">
        <p class="text-center text-2xl">Task Management</p>
      </div>
      <div class="flex justify-center mb-6">
        <button
          type="button"
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          @click="setModal"
        >
          Create Task
        </button>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">ID</th>
              <th scope="col" class="px-6 py-3">Task Description</th>
              <th scope="col" class="px-6 py-3">Created By</th>
              <th scope="col" class="px-6 py-3">Assigned To</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody v-if="tasks">
            <tr
              v-for="task in tasks"
              :key="task.ID"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <task-list-item v-bind="task" />
            </tr>
          </tbody>
        </table>
      </div>
      <create-modal v-if="showCreateModal" />
      <edit-modal v-if="showEditModal" :id="editTaskId" />
      <remove-modal v-if="showRemoveModal" :id="removeTaskId" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { MutationType } from "@/store/mutations";
import TaskListItem from "./TaskListItem.vue";
import CreateModal from "./modals/CreateModal.vue";
import EditModal from "./modals/EditModal.vue";
import RemoveModal from "./modals/RemoveModal.vue";

export default defineComponent({
  name: "TaskList",
  components: { TaskListItem, CreateModal, EditModal, RemoveModal },
  setup() {
    const store = useStore();
    const setModal = () => {
      store.commit(MutationType.SetCreateModal, true);
    };

    const showCreateModal = computed(() => store.state.showCreateModal);
    const showEditModal = computed(() => store.state.showEditModal);
    const editTaskId = computed(() => store.state.editModalTaskId);
    const showRemoveModal = computed(() => store.state.showRemoveModal);
    const removeTaskId = computed(() => store.state.removeModalTaskId);
    const tasks = computed(() => store.state.tasks);

    return {
      tasks,
      setModal,
      showCreateModal,
      showEditModal,
      editTaskId,
      showRemoveModal,
      removeTaskId,
    };
  },
});
</script>
