<template>
  <td class="px-6 py-4">{{ id }}</td>
  <th
    scope="row"
    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
  >
    {{ taskDesc }}
  </th>
  <td class="px-6 py-4">{{ createdBy }}</td>
  <td class="px-6 py-4">{{ assignedTo }}</td>
  <td class="px-6 py-4">
    <span
      class="w-6 h-6 text-gray-800 dark:text-white cursor-pointer pr-3"
      @click="editTask()"
    >
      <i class="fa fa-edit"></i>
    </span>
    <span
      class="w-6 h-6 text-gray-800 dark:text-white cursor-pointer"
      @click="removeTask()"
    >
      <i class="fa fa-trash"></i>
    </span>
  </td>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { MutationType } from "@/store/mutations";

export default defineComponent({
  props: {
    id: { type: Number, required: true },
    taskDesc: { type: String, required: true },
    createdBy: { type: String, required: true },
    assignedTo: { type: String, required: true },
  },
  components: {},
  setup(props) {
    const store = useStore();
    const editTask = () => {
      store.commit(MutationType.SetEditModal, {
        showModal: true,
        taskId: props.id,
      });
    };
    const removeTask = () => {
      store.commit(MutationType.SetRemoveModal, {
        showModal: true,
        taskId: props.id,
      });
    };
    return { removeTask, editTask };
  },
});
</script>
