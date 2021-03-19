import { RouteRecordRaw } from "vue-router";

import { AuthModule } from "@/store/modules/auth";

// Views
import Home from "@/views/Home.vue";
import Friend from "@/views/Friend.vue";
import Dashboard from "@/views/Dashboard.vue";
import Friends from "@/views/Friends.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
      navItem: {
        icon: "home",
      },
    },
  },
  {
    path: "/friends",
    name: "Friends",
    component: Friends,
    meta: {
      requiresAuth: true,
      navItem: {
        icon: "userGroup",
      },
    },
  },
  {
    path: "/friends/:id",
    name: "Friend",
    component: Friend,
    meta: {
      requiresAuth: true,
    },
  },
];
