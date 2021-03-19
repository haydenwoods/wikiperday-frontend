<template>
  <div class="mx-auto w-56 flex flex-col items-center">
    <wd-icon
      v-if="icon"
      :name="icon"
      size="xxlg"
      type="secondary"
      class="mb-2"
    />
    <wd-text size="lg" align="center" type="secondary">
      <slot />
    </wd-text>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Empty",
    props: {
      icon: String,
    },
  });
</script>
