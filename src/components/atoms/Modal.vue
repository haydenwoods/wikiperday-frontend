<template>
  <div class="relative w-112 rounded-2xl px-6 py-6 bg-white">
    <div 
      class="absolute top-4 left-4 cursor-pointer"
      @click="closeModal"
    >
      <Icon class="text-text-secondary" icon="x"/>
    </div>

    <div class="w-full">
      <slot name="header"></slot>
    </div>

    <Spacer horizontal multiplier="6"/>

    <div class="w-full">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, } from "vue";
  import { useStore } from "vuex";

  import Icon from "@/components/atoms/Icon/Icon.vue";
  import Spacer from "@/components/atoms/Spacer.vue";

  export default defineComponent({
    name: "Modal",
    components: {
      Icon,
      Spacer,
    },
    setup() {
      const store = useStore();

      const closeModal = () => store.commit("modals/closeModal");

      return {
        closeModal,
      }
    },
  });
</script>