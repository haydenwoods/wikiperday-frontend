<template>
  <div class="min-h-screen flex flex-col" name="page">
    <Header />

    <div class="flex-grow w-320 py-6 mx-0 md:mx-auto">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import Header from "@/components/organisms/Header/Header.vue";

  export default defineComponent({
    name: "Page",
    components: {
      Header,
    },
  });
</script>
