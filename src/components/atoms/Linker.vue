<template>
  <component 
    :is="type === 'internal' ? 'router-link' : 'a'"
    :to="to"
    :href="to" 
    :target="newtab ? '_blank' : ''"
    :class="classes"
  >
    <slot />
  </component>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed, } from "vue";
  import { propsToClasses, } from "@/helpers/styles";

  type Type = "internal" | "external";
  type DisplayType = "bold";

  export default defineComponent({
    name: "Linker",
    props: {
      to: {
        type: String,
        required: true,
      },
      type: {
        type: String as PropType<Type>,
        default: "internal",
      },
      newtab: {
        type: Boolean,
        default: false,
      },
      display: {
        type: String as PropType<DisplayType>,
        default: "none",
      },
    },
    setup(props) {
      const classes = computed(() => propsToClasses({
        styles: [
          {
            value: props.display,
            values: {
              "none": "",
              "bold": "font-bold",
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