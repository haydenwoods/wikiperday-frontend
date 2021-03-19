<template>
  <div
    class="border-b border-solid border-border-primary last:border-b-0 px-4 py-2 whitespace-nowrap flex"
  >
    <wd-button type="text" height="sm">
      <slot />
    </wd-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "wdMenuItem",
  });
</script>
