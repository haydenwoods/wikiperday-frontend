import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router/routes";

import { AuthModule } from "@/store/modules/auth";

import { getIsLoggedIn } from "@/helpers/auth";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const { requiresAuth } = to?.meta;

  if (requiresAuth && !getIsLoggedIn()) {
    await AuthModule.session().catch(() => next("/"));
  }

  if (requiresAuth) {
    const hasAuth = getIsLoggedIn() ? true : false;
    if (!hasAuth) {
      return next("/");
    }
  }

  next();
});

export default router;
