import { RouteRecordRaw } from "vue-router";

// Views
import Dashboard from "@/views/Dashboard.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
];