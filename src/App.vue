<template>
  <main class="min-h-screen">
    <router-view />

    <div 
      v-if="openModal"
      class="min-h-screen w-screen absolute top-0 left-0 bg-black bg-opacity-40 flex justify-center items-center py-8"
    >
      <SigninModal v-if="openModal === 'signin'"/>
      <SignupModal v-if="openModal === 'signup'"/>
    </div>
  </main>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import { useStore, } from "vuex";
  
  import { DEFAULT_THEME } from "@/theme";
  import { setTheme } from "@/theme/utils";
  
  import SigninModal from "@/components/organisms/Modals/SigninModal.vue";
  import SignupModal from "@/components/organisms/Modals/SignupModal.vue";

  import "@/styles/_generated.css";

  export default defineComponent({
    name: "App",
    components: {
      SigninModal,
      SignupModal,
    },
    setup() {
      const store = useStore();

      setTheme(DEFAULT_THEME);
      store.dispatch("auth/session");

      return {
        openModal: computed(() => store.state.modals.openModal),
      }
    },
  });
</script>