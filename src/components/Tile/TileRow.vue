<template>
  <div class="flex flex-row flex-grow-0">
    <slot/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ScoreboardTileRow",
  });
</script>