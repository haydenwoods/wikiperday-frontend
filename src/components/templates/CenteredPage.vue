<template>
  <div class="min-h-screen w-full flex flex-col items-center justify-center">
    <main class="flex justify-center py-8 mt-auto w-full px-8 xsm:w-auto xsm:px-0">
      <slot />
    </main>

    <div class="mt-auto">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, } from "vue";

  export default defineComponent({
    name: "CenteredPage",
  });
</script>