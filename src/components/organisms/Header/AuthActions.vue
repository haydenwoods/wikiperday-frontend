<template>
  <wd-button @click="openModal({ name: 'SigninModal' })" type="text"
    >Sign in</wd-button
  >
  <wd-spacer size="6" />
  <wd-button @click="openModal({ name: 'SignupModal' })">Sign up</wd-button>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { ModalsModule } from "@/store/modules/modals";

  export default defineComponent({
    name: "AuthActions",
    setup() {
      return {
        openModal: ({ name }: { name: string }) =>
          ModalsModule.openModal({ name }),
      };
    },
  });
</script>
