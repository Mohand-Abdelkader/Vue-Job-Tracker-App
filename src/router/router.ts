import { createWebHistory, createRouter } from "vue-router";

import Overview from "../components/Pages/Overview.vue";
import JobList from "../components/Pages/JobList.vue";
import Settings from "../components/Pages/Settings.vue";
import AddApplication from "../components/Pages/AddApplication.vue";

const routes = [
  { path: "/", component: Overview },
  { path: "/Application-List", component: JobList },
  { path: "/settings", component: Settings },
  { path: "/Add-Application", component: AddApplication },
];

const router = createRouter({
  linkActiveClass: "border-indigo-500",
  linkExactActiveClass: "border-indigo-700",
  history: createWebHistory(),
  routes,
});

export default router;
