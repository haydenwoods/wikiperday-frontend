import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router/routes";

import { AuthModule } from "@/store/modules/auth";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const { requiresAuth } = to?.meta;

  if (requiresAuth) {
    await AuthModule.session().catch(() => {
      return next("/");
    });
  }

  next();
});

export default router;
