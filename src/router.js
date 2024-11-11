import MyTasks from "@/components/MyTasks.vue";
import CreateTask from "@/components/CreateTask.vue";
import { createMemoryHistory, createRouter } from "vue-router";
import Settings_task from "./components/Settings_task.vue";

const routes = [
  { path: "/", component: MyTasks },
  { path: "/create_task", component: CreateTask },
  { path: "/settings_task", component: Settings_task },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
