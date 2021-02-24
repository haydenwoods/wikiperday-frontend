<template>
  <main class="min-h-screen">
    <router-view />
    <Modals/>
  </main>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import { useStore, } from "vuex";
  import { getModule } from "vuex-module-decorators";

  import Auth from "@/store/modules/auth";
  
  import { DEFAULT_THEME } from "@/theme";
  import { setTheme } from "@/theme/utils";
  
  import Modals from "@/components/organisms/Modals/Modals.vue";

  import "@/styles/_generated.css";

  export default defineComponent({
    name: "App",
    components: {
      Modals,
    },
    setup() {
      const store = useStore();
      const authModule = getModule(Auth, store);

      authModule.session();
      setTheme(DEFAULT_THEME);
    },
  });
</script>