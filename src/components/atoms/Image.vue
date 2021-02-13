<template>
  <img
    name="image"
    :src="src"
  >
</template>

<script lang="ts">
  import { defineComponent, } from "vue";

  export default defineComponent({
    name: "Image",
    props: {
      src: {
        type: String,
      },
    },
  });
</script>