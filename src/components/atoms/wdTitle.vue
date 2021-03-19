<template>
  <h1 name="title" class="font-proximaNova font-bold" :class="classes">
    <slot />
  </h1>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from "vue";
  import { propsToClasses } from "@/helpers/styles";
  import { Align, Size } from "@/types/props";

  type Type = "title" | "accent-text";
  type Wrap = "wrap" | "nowrap";

  export default defineComponent({
    name: "wdTitle",
    props: {
      type: {
        type: String as PropType<Type>,
        default: "primary",
      },
      align: {
        type: String as PropType<Align>,
        default: "left",
      },
      size: {
        type: String as PropType<Size>,
        default: "md",
      },
      wrap: {
        type: String as PropType<Wrap>,
        default: "wrap",
      },
    },
    setup(props) {
      const classes = computed(() =>
        propsToClasses([
          {
            value: props.type,
            values: {
              primary: "text-title-primary",
              secondary: "text-title-secondary",
              tertiary: "text-title-tertiary",
              "bg-primary": "text-bg-primary",
              "bg-secondary": "text-bg-secondary",
              "accent-text": "text-accent-text-primary",
            },
          },
          {
            value: props.align,
            values: {
              left: "text-left",
              center: "text-center",
              right: "text-right",
            },
          },
          {
            value: props.size,
            values: {
              xsm: "text-lg tracking-wide leading-snug",
              sm: "text-xl tracking-wide leading-snug",
              md: "text-3xl tracking-wide",
              lg: "text-4xl",
              xlg: "text-5xl",
            },
          },
          {
            value: props.wrap,
            values: {
              nowrap: "whitespace-nowrap overflow-ellipsis",
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
