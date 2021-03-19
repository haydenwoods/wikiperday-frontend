<template>
  <div
    class="w-full p-6 bg-background-secondary rounded-3xl border border-solid border-border-primary"
  >
    <slot />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "wdwd-container",
  });
</script>
