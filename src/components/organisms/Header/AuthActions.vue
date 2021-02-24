<template>
  <Button @click="openModal({ name: 'signin' })" type="text">Sign in</Button>
  <Spacer vertical multiplier="6"/>
  <Button @click="openModal({ name: 'signup' })" >Sign up</Button>
</template>

<script lang="ts">
  import { defineComponent, } from "vue";
  import { ModalsModule } from "@/store/modules/modals";

  import Button from "@/components/atoms/Button.vue";
  import Spacer from "@/components/atoms/Spacer.vue";

  export default defineComponent({
    name: "AuthActions",
    components: {
      Button,
      Spacer,
    },
    setup() {
      return {
        openModal: ({ name }: { name: string }) => ModalsModule.openModal({ name }),
      }
    }
  });
</script>