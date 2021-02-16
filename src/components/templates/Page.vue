<template>
  <div class="min-h-screen flex flex-col">
    <Header/>

    <div class="flex-grow w-full py-6 px-6 mx-0 md:mx-auto md:w-5/6 lg:w-3/4">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, } from "vue";

  import Header from "@/components/organisms/Header/Header.vue";

  export default defineComponent({
    name: "Page",
    components: {
      Header,
    },
  });
</script>