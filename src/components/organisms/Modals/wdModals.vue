<template>
  <div
    v-if="currentModal"
    class="min-h-screen w-screen absolute top-0 left-0 bg-black bg-opacity-40 flex justify-center items-center py-8 z-50"
  >
    <component :is="currentModal"></component>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import { ModalsModule } from "@/store/modules/modals";

  import SigninModal from "@/components/organisms/Modals/SigninModal.vue";
  import SignupModal from "@/components/organisms/Modals/SignupModal.vue";
  import AddFriendModal from "@/components/organisms/Modals/AddFriendModal.vue";

  export default defineComponent({
    name: "wdModals",
    components: {
      SigninModal,
      SignupModal,
      AddFriendModal,
    },
    setup: () => ({
      currentModal: computed(() => ModalsModule.currentModal),
    }),
  });
</script>
