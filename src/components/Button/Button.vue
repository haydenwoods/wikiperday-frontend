<template>
  <button :class="getClass">
    <slot/>
  </button>
</template>

<script lang="ts">
  import { defineComponent, PropType } from "vue";
  import { parseStyles } from "@/helpers/styles";
  
  type Type = "primary" | "secondary";
  type Size = "sm" | "md" | "lg";

  export default defineComponent({ 
    name: "Button",
    props: {
      type: {
        type: String as PropType<Type>,
        default: "primary",
      },
      size: {
        type: String as PropType<Size>,
        default: "md",
      },
    },
    computed: {
      getClass(): string {
        return parseStyles({
          defaults: "rounded-md box-border",
          styles: {
            types: {
              value: this.type,
              values: {
                "primary": "bg-green text-darkGreen",
                "secondary": "bg-lightGrey text-gray-800",
              }
            },  
            sizes: {
              value: this.size,
              values: {
                "sm": "h-6 px-2 text-sm",
                "md": "h-8 px-4 text-sm",
                "lg": "h-10 px-4 text-md",
              }
            },
          }
        });
      },
    },
  });
</script>
