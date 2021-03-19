<template>
  <div name="wdSpacer" :class="`flex-shrink-0 flex-grow-0 ${classes}`" />
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from "vue";
  import { propsToClasses } from "@/helpers/styles";

  type Side = "hor" | "ver";

  export default defineComponent({
    name: "wdSpacer",
    props: {
      size: {
        type: String,
      },
      side: {
        type: String as PropType<Side>,
        default: "hor",
      },
    },
    setup(props) {
      const classes = computed(() =>
        propsToClasses([
          {
            value: props.side,
            values: {
              hor: `h-full w-${props.size}`,
              ver: `w-full h-${props.size}`,
            },
          },
        ])
      );

      return {
        classes,
      };
    },
  });
</script>
