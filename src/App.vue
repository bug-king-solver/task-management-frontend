<template>
  <task-list />
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import TaskList from "./components/TaskList.vue";
import "./assets/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useStore } from "./store";
import { ActionTypes } from "./store/actions";
export default defineComponent({
  components: { TaskList },
  setup() {
    const store = useStore();
    onMounted(() => store.dispatch(ActionTypes.GetTaskItems));
  },
});
</script>
