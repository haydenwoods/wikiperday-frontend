<template>
  <h1 :class="getClass" ref="title">
    <slot/>
  </h1>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { parseStyles } from "@/helpers/styles";

  type Type = "primary" | "secondary" | "light" | "disabled" | "good" | "error" | "warn";
  type Align = "left" | "center" | "right";
  type Size = "xsm" | "sm" | "md" | "lg" | "xlg";

  export default defineComponent({
    name: "Title",
    props: {
      type: {
        type: String as () => Type,
        default: "primary",
      },
      size: {
        type: String as () => Size,
        default: "md",
      },
      align: {
        type: String as () => Align,
        default: "left",
      },
      fitToLine: {
        type: Boolean,
        default: false,
      },
      inline: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        style: {},
      }
    },
    mounted() {
      const style = {
        fontSize: null,
      }

      return style;
    },
    computed: {  
      getClass(): string {
        return parseStyles({
          styles: {
            types: {
              value: this.type,
              values: {
                "primary": "text-gray-800 font-bold",
                "secondary": "text-gray-700 font-semibold",
                "light": "text-gray-600 font-semibold",
                "disabled": "text-gray-400 font-bold",
                "good": "text-green font-bold",
                "error": "text-error font-bold",
                "warn": "text-warn font-bold",
              }
            }, 
            sizes: {
              value: this.size,
              values: {
                "xsm": "text-xl",
                "sm": "text-2xl",
                "md": "text-3xl tracking-wide",
                "xmd": "text-4xl tracking-wide",
                "lg": "text-5xl tracking-wide",
                "xlg": "text-7xl tracking-wide",
              }
            }, 
            align: {
              value: this.align,
              values: {
                "left": "text-left",
                "center": "text-center",
                "right": "text-right"
              }
            }, 
            inline: {
              value: this.inline,
              values: {
                "true": "inline",
              }
            }
          }
        });
      },
    },
  });
</script>
