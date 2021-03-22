<template>
  <slot v-if="isAnyLoading" name="loading" />
  <slot v-else-if="hasFailedSlot && isAnyFailed" name="failed" />
  <slot v-else />
</template>

<script lang="ts">
  import { defineComponent, computed, PropType } from "vue";
  import { getAllIsStatus, getAnyIsStatus } from "@/helpers/process";

  export default defineComponent({
    name: "wdProcess",
    props: {
      names: {
        type: Array as PropType<string[]>,
        required: true,
      },
    },
    setup(props, { slots }) {
      const hasFailedSlot = computed(() => slots.failed);

      const isAllSuccess = computed(() =>
        getAllIsStatus({ names: props.names, status: "success" })
      );

      const isAnyLoading = computed(() =>
        getAnyIsStatus({ names: props.names, status: "loading" })
      );

      const isAnyFailed = computed(() =>
        getAnyIsStatus({ names: props.names, status: "failed" })
      );

      return {
        hasFailedSlot,

        isAllSuccess,
        isAnyLoading,
        isAnyFailed,
      };
    },
  });
</script>
