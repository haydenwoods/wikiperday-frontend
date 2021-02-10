<template>
  <div name="page" class="min-h-screen bg-green">
    <slot/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({ 
    name: "Page",
  });
</script>
