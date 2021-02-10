<template>
  <router-link class="text-current underline" :to="link">
    <slot/>
  </router-link>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "InternalLink",
    props: {
      link: {
        type: String,
        default: "/",
      },
    },
  });
</script>
