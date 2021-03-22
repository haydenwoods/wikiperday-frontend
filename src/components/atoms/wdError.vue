<template>
  {{ error }}
</template>

<script lang="ts">
  import { defineComponent, computed, PropType } from "vue";
  import { getAllErrors } from "@/helpers/process";

  export default defineComponent({
    name: "wdError",
    props: {
      names: {
        type: Array as PropType<string[]>,
        required: true,
      },
    },
    setup(props) {
      const errors = computed(() => getAllErrors({ names: props.names }));
      const error = computed(() => errors.value[0]);
      const hasError = computed(() => (error.value ? true : false));

      return {
        errors,
        error,
        hasError,
      };
    },
  });
</script>
