<template>
  <img name="image" :src="src" />
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "wdImage",
    props: {
      src: {
        type: String,
      },
    },
  });
</script>
