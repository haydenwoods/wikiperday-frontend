<template>
  <main class="min-h-screen">
    <Suspense>
      <router-view />
    </Suspense>
    <wd-modals />
  </main>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { AuthModule } from "@/store/modules/auth";

  import { DEFAULT_THEME } from "@/theme";
  import { setTheme } from "@/theme/utils";

  import wdModals from "@/components/organisms/Modals/wdModals.vue";

  import "@/styles/app.css";

  export default defineComponent({
    name: "App",
    components: {
      wdModals,
    },
    setup() {
      AuthModule.session();
      setTheme(DEFAULT_THEME);
    },
  });
</script>
