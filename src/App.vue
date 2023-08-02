<template>
  <task-list />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TaskList from "./components/TaskList.vue";
import "./assets/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.css";
export default defineComponent({
  components: { TaskList },
});
</script>
