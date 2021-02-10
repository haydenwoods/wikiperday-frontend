<template>
  <div class="h-auto w-auto">
    <slot/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({ 
    name: "Badge",
  });
</script>
