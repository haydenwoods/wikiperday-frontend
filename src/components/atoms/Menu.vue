<template>
  <div class="border border-solid border-border-primary rounded-xl overflow-hidden bg-background-secondary">
    <slot/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Menu",
  });
</script>