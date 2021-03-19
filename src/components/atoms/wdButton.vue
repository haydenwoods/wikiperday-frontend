<template>
  <button :class="outerClasses">
    <div
      class="relative text-base rounded-xl tracking-wide outline-none flex justify-center items-center"
      :class="innerClasses"
      tabindex="-1"
    >
      <slot />
    </div>
  </button>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from "vue";
  import { propsToClasses } from "@/helpers/styles";

  export type Type = "primary" | "secondary" | "text";
  export type Width = "content" | "full";
  export type Height = "sm" | "md" | "lg";

  export default defineComponent({
    name: "wdButton",
    props: {
      type: {
        type: String as PropType<Type>,
        default: "primary",
      },
      width: {
        type: String as PropType<Width>,
        default: "content",
      },
      height: {
        type: String as PropType<Height>,
        default: "md",
      },
    },
    setup(props) {
      const innerClasses = computed(() =>
        propsToClasses([
          {
            value: props.type,
            values: {
              primary: `
                bg-accent-primary text-accent-text-primary font-medium px-4
              `,
              secondary: "bg-gray-300 text-gray-600 font-medium px-4",
              text: "text-gray-600 hover:underline",
            },
          },
          {
            value: props.width,
            values: {
              content: "",
              full: "w-full",
            },
          },
          {
            value: props.height,
            values: {
              none: "",
              xsm: "h-4",
              sm: "h-6",
              md: "h-9",
              lg: "h-11 tracking-wider",
            },
          },
        ])
      );

      const outerClasses = computed(() =>
        propsToClasses([
          {
            value: props.width,
            values: {
              content: "",
              full: "w-full",
            },
          },
        ])
      );

      return {
        innerClasses,
        outerClasses,
      };
    },
  });
</script>

<style scoped>
  button:focus,
  button > div {
    outline: none;
  }

  button:focus > div {
    box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.25);
  }
</style>
