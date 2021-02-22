import { createRouter, createWebHistory } from "vue-router"
import { routes } from "@/router/routes";

import { getAuth } from "@/helpers/auth";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const hasAuth = getAuth() ? true : false;

  if (to.meta?.requiresAuth && !hasAuth) {
    return next("/");
  }

  next();
});

export default router;