<template>
  <Button @click="openModal({ name: 'signin' })" type="text">Sign in</Button>
  <Spacer vertical multiplier="6"/>
  <Button @click="openModal({ name: 'signup' })" >Sign up</Button>
</template>

<script lang="ts">
  import { defineComponent, } from "vue";
  import { useStore } from "vuex";

  import Button from "@/components/atoms/Button.vue";
  import Spacer from "@/components/atoms/Spacer.vue";

  export default defineComponent({
    name: "AuthActions",
    components: {
      Button,
      Spacer,
    },
    setup() {
      const store = useStore();

      return {
        openModal: ({ name }: { name: string }) => store.commit("modals/openModal", { name }),
      }
    }
  });
</script>