import { RouteRecordRaw } from "vue-router";

// Views
import Home from "@/views/Home.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];