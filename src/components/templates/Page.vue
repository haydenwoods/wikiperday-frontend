<template>
  <div class="min-h-screen flex flex-col">
    <Header/>

    <div class="flex-grow">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, } from "vue";

  import Header from "@/components/atoms/Header.vue";

  export default defineComponent({
    name: "CenteredPage",
    components: {
      Header,
    },
  });
</script>