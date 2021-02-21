<template>
  <p
    name="text"
    :class="classes"
  >
    <slot />
  </p>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType, } from "vue";
  import { propsToClasses, } from "@/helpers/styles";
  import { Align, Size, } from "@/types/styles";

  type Type = "body" | "error";

  export default defineComponent({
    name: "Text",
    props: {
      type: {
        type: String as PropType<Type>,
        default: "body",
      },
      align: {
        type: String as PropType<Align>,
        default: "left",
      },
      size: {
        type: String as PropType<Size>,
        default: "md",
      },
    },
    setup(props) {
      const classes = computed(() => propsToClasses({
        defaults: "font-proximaNova",
        styles: [
          {
            value: props.type,
            values: {
              "primary": "text-text-primary",
              "secondary": "text-text-secondary",
              "tertiary": "text-text-tertiary",
              "success": "text-accent-green",
              "error": "text-accent-red",
            }
          },
          {
            value: props.align,
            values: {
              "left": "text-left",
              "center": "text-center",
              "right": "text-right",
            },
          },
          {
            value: props.size,
            values: {
              "xs": "text-xs leading-3",
              "sm": "text-sm leading-4",
              "md": "text-base leading-5",
              "lg": "text-lg leading-7",
              "xl": "text-xl leading-9",
            },
          },
        ],
      })); 

      return {
        classes,
      }
    },
  });
</script>