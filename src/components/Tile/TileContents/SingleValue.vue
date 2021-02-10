<template>
  <div class="flex flex-col justify-center w-full flex-grow">
    <transition name="fadeUp" mode="out-in">
      <Title :key="value" size="xlg" class="overflow-hidden overflow-ellipsis whitespace-nowrap">{{ value }}</Title>
    </transition>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import Title from "@/components/Text/Title.vue";

  export default defineComponent({
    name: "SingleValue",
    props: {
      value: {
        type: Number,
        default: 0,
      }
    },
    components: {
      Title,
    }
  });
</script>

<style>
  .fadeUp-enter-active,
  .fadeUp-leave-active {
    transition: transform 0.15s, opacity 0.15s;
    will-change: transform;
  }
  .fadeUp-enter-from {
    transform: translateY(50%);
    opacity: 0;
  }
  .fadeUp-leave-to {
    transform: translateY(-50%);
    opacity: 0;
  }
</style>