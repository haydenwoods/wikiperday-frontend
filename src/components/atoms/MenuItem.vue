<template>
  <div class="border-b border-solid border-border-primary last:border-b-0 px-4 py-2 whitespace-nowrap flex flex-row">
    <Button type="text" height="sm">
      <slot/>
    </Button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import Button from "@/components/atoms/Button.vue";

  export default defineComponent({
    name: "MenuItem",
    components: {
      Button,
    },
  });
</script>