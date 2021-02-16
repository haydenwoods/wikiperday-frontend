<template>
  <Button @click="openModal('signin')" type="text">Sign in</Button>
  <Spacer vertical multiplier="6"/>
  <Button @click="openModal('signup')" >Sign up</Button>
</template>

<script lang="ts">
  import { defineComponent, } from "vue";
  import store from "@/store";

  import Button from "@/components/atoms/Button.vue";
  import Spacer from "@/components/atoms/Spacer.vue";

  export default defineComponent({
    name: "AuthActions",
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