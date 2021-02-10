<template>
  <div class="flex-grow flex flex-col justify-center">
    <div>
      <Title size="xlg" class="pb-3 pr-2 inline-block">8</Title>
      <Title size="lg" type="good" class="inline-block pr-10">in</Title>
      <Title size="xlg" class="pb-3 pr-2 inline-block">4</Title>
      <Title size="lg" type="error" class="inline-block pr-4">out</Title>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import Title from "@/components/Text/Title.vue";

  export default defineComponent({
    name: "Players",
    props: {

    },
    components: {
      Title,
    }
  });
</script>