<template>
  <div class="flex-grow flex flex-col justify-center">
    <div>
      <Title class="pb-3 whitespace-nowrap overflow-hidden overflow-ellipsis" size="lg">{{ currentPlayer?.name }}</Title>
      
      <div class="whitespace-nowrap overflow-hidden overflow-ellipsis">
        <Title size="sm" type="light" inline>then </Title>
        <transition name="subtitle">
          <Title size="sm" type="light" inline>{{ nextPlayer?.name }}</Title>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import Title from "@/components/Text/Title.vue";

  export default defineComponent({
    name: "UpNow",
    props: {
      currentPlayer: {
        type: Object,
      },
      nextPlayer: {
        type: Object,
      },
    },
    components: {
      Title,
    }
  });
</script>