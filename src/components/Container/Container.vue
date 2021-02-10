<template>
  <div class="bg-lightWhite rounded-2xl shadow-container box-border overflow-hidden">
    <slot/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({ 
    name: "Container",
  });
</script>
