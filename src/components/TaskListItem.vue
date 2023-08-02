<template>
  <td class="px-6 py-4">{{ id }}</td>
  <th
    scope="row"
    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
  >
    {{ task }}
  </th>
  <td class="px-6 py-4">{{ createdBy }}</td>
  <td class="px-6 py-4">{{ assignedTo }}</td>
  <td class="px-6 py-4">
    <span class="w-6 h-6 text-gray-800 dark:text-white">
      <i class="fa fa-edit"></i>
    </span>
    <span class="w-6 h-6 text-gray-800 dark:text-white">
      <i class="fa fa-trash"></i>
    </span>
  </td>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: { type: Number, required: true },
    task: { type: String, required: true },
    createdBy: { type: String, required: true },
    assignedTo: { type: String, required: true },
  },
  components: {},
});
</script>
