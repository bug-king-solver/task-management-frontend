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
    <span class="w-6 h-6 text-gray-800 dark:text-white cursor-pointer">
      <i class="fa fa-edit"></i>
    </span>
    <span
      class="w-6 h-6 text-gray-800 dark:text-white cursor-pointer"
      data-modal-target="popup-modal"
      data-modal-toggle="popup-modal"
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
    const removeTask = () => {
      if (window.confirm("Are you sure")) {
        store.commit(MutationType.RemoveTask, {
          id: props.id,
        });
      }
    };
    return { removeTask };
  },
});
</script>
