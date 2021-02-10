<template>
  <a class="text-current underline" :href="link" :target="newTab ? '_blank' : ''">
    <slot/>
  </a>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ExternalLink",
    props: {
      link: {
        type: String,
      },
      newTab: {
        type: Boolean,
        default: false,
      }
    },
  });
</script>
