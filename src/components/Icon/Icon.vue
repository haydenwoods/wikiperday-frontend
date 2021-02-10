<template>
  <div :class="getClass" :style="getStyle">
    <slot class="w-full h-full"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { parseStyles } from "@/helpers/styles";

  type Size = "sm" | "md" | "lg" | "xlg" | "xxlg";

  export default defineComponent({ 
    name: "Icon",
    props: {
      size: {
        type: String as () => Size,
        default: "md",
      },
      dropshadow: {
        type: Boolean,
        default: false,
      }
    },
    computed: {
      getClass(): string {
        return parseStyles({
          defaults: "text-gray-800",
          styles: {
            sizes: {
              value: this.size,
              values: {
                "xsm": "h-4 w-4",
                "sm": "h-5 w-5",
                "md": "h-7 w-7",
                "lg": "h-9 w-9",
                "xlg": "h-16 w-16",
                "xxlg": "h-28 w-28",
              }
            },
          }
        });
      },
      getStyle(): object {
        const styles: Record<string, string> = {};

        if (this.dropshadow) {
          styles["filter"] = "drop-shadow(5px 4px 0px rgba(0, 0, 0, 0.1))";
        }

        return styles;
      },
    },
  });
</script>
