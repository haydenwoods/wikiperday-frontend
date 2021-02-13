<template>
  <div class="h-14 border-b border-gray-200 border-solid">
    <div class="h-full flex flex-row px-4 items-center">
      <div class="flex ml-auto">
        <Button @click="openModal('signin')" type="text">Sign in</Button>
        <Spacer vertical multiplier="2"/>
        <Button @click="openModal('signup')" >Sign up</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, } from "vue";
  import store from "@/store";

  import Button from "@/components/atoms/Button.vue";
  import Spacer from "@/components/atoms/Spacer.vue";

  export default defineComponent({
    name: "Header",
    components: {
      Button,
      Spacer,
    },
    setup() {
      const openModal = (modalName: string) => store.commit("modals/openModal", modalName);

      return {
        openModal,
      }
    }
  });
</script>