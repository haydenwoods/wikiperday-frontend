<template>
  <div class="flex items-center">
    <div
      v-for="item in navItems"
      :key="item.name"
      class="flex items-center mr-10 last:mr-0 relative"
    >
      <div
        v-if="item.active"
        class="h-10 w-10 bg-accent-secondary absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-full"
      ></div>

      <div class="z-10">
        <router-link :to="item.path">
          <wd-icon
            :name="item.icon"
            size="lg"
            :type="item.active ? 'tertiary' : ''"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { routes } from "@/router/routes";

  import { getCurrentRoute } from "@/helpers/router";

  type NavItem = {
    name: string;
    path: string;
    icon: string;
    active: boolean;
  };

  export default defineComponent({
    name: "NavBar",
    setup() {
      const currentRoute = getCurrentRoute();

      const navItems: NavItem[] = routes
        .filter((route) => route?.meta?.navItem)
        .map((route) => ({
          ...route,
          ...route?.meta?.navItem,
          active: (route?.name as string)?.includes(
            currentRoute?.name as string
          ),
        }));

      return {
        navItems,
      };
    },
  });
</script>
