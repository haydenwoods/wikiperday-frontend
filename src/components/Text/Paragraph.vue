<template>
  <p :class="getClass">
    <slot/>
  </p>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { parseStyles } from "@/helpers/styles";

  type Type = "body" | "greyed";
  type Align = "left" | "center" | "right";

  export default defineComponent({
    name: "Paragraph",
    props: {
      type: {
        type: String as () => Type,
        default: "body",
      },
      align: {
        type: String as () => Align,
        default: "left",
      }
    },
    computed: {
      getClass(): string {
        return parseStyles({
          styles: {
            types: {
              value: this.type,
              values: {
                "body": "text-lg text-gray-900",
                "disabled": "text-md text-gray-400"
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
          }
        });
      }
    },
  });
</script>
