<template>
  <h1
    name="title"
    :class="classes"
  >
    <slot />
  </h1>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType, } from "vue";
  import { propsToClasses, } from "@/helpers/styles";
  import { Align, Size, } from "@/types/styles";

  export default defineComponent({
    name: "Title",
    props: {
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
        defaults: "font-proximaNova font-bold text-title-primary",
        styles: [
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
              "sm": "text-xl",
              "md": "text-3xl",
              "lg": "text-5xl",
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