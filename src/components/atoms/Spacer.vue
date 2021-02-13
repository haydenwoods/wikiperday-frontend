<template>
  <div
    name="spacer"
    :class="classes"
  />
</template>

<script lang="ts">
  import { computed, defineComponent, } from "vue";
  import { propsToClasses, } from "@/helpers/styles";

  export default defineComponent({
    name: "Spacer",
    props: {
      multiplier: {
        type: String,
      },
      horizontal: {
        type: Boolean,
      },
      vertical: {
        type: Boolean,
      },
    },
    setup(props) {
      const classes = computed(() => propsToClasses({
        defaults: "flex-shrink-0 flex-grow-0",
        styles: [
          {
            value: props.horizontal,
            values: {
              "true": `w-full h-${props.multiplier}`,
            },
          },
          {
            value: props.vertical,
            values: {
              "true": `h-full w-${props.multiplier}`,
            },
          },
        ],
      })); 

      return {
        classes,
      };
    },
  });
</script>