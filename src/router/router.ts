import { createWebHistory, createRouter } from "vue-router";

import HelloWorld from "../components/HelloWorld.vue";
import JobDetails from "../components/JobDetails.vue";

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/job", component: JobDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
