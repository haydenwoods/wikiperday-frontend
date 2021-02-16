<template>
  <div v-if="openModal" class="min-h-screen w-screen absolute top-0 left-0 bg-black bg-opacity-40 flex justify-center items-center py-8">
    <SigninModal v-if="openModal === 'signin'"/>
    <SignupModal v-if="openModal === 'signup'"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import { useStore, } from "vuex";

  import SigninModal from "@/components/organisms/Modals/SigninModal.vue";
  import SignupModal from "@/components/organisms/Modals/SignupModal.vue";

  export default defineComponent({
    name: "Modals",
    components: {
      SigninModal,
      SignupModal,
    },
    setup() {
      const store = useStore();

      return {
        openModal: computed(() => store.state.modals.openModal),
      }
    },
  });
</script>