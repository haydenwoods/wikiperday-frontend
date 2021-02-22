<template>
  <div v-if="openModal" class="min-h-screen w-screen absolute top-0 left-0 bg-black bg-opacity-40 flex justify-center items-center py-8 z-50">
    <SigninModal v-if="openModal === 'signin'"/>
    <SignupModal v-if="openModal === 'signup'"/>
    <AddFriendModal v-if="openModal === 'addFriend'"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import { useStore, } from "vuex";

  import SigninModal from "@/components/organisms/Modals/SigninModal.vue";
  import SignupModal from "@/components/organisms/Modals/SignupModal.vue";
  import AddFriendModal from "@/components/organisms/Modals/AddFriendModal.vue";

  export default defineComponent({
    name: "Modals",
    components: {
      SigninModal,
      SignupModal,
      AddFriendModal,
    },
    setup() {
      const store = useStore();

      return {
        openModal: computed(() => store.state.modals.openModal),
      }
    },
  });
</script>