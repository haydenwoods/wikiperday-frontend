import { RouteRecordRaw } from "vue-router";

// Views
import Dashboard from "@/views/Dashboard.vue";
import Friends from "@/views/Friends.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/friends",
    name: "Friends",
    component: Friends,
  },
];