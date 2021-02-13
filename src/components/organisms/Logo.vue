<template>
  <NoInteract>
    <Image
      :class="classes"
    />
  </NoInteract>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed, } from "vue";
  import { Size, Align, } from "@/types/styles";
  import { propsToClasses, } from "@/helpers/styles";
  import { getTheme, } from "@/theme/utils";

  import Image from "@/components/atoms/Image.vue";
  import NoInteract from "@/components/atoms/NoInteract.vue";

  type Style = "greyed";

  export default defineComponent({
    name: "Logo",
    components: {
      Image,
      NoInteract,
    },  
    props: {
      size: {
        type: String as PropType<Size>,
        default: "lg",
        required: true,
      },
      modifier: {
        type: String as PropType<Style>,
        default: "",
      },
      align: {
        type: String as PropType<Align>,
        default: "left",
      },
    },  
    setup(props) {
      const classes = computed(() => propsToClasses({
        defaults: "block margin",
        styles: [
          {
            value: props.align,
            values: {
              "left": "mr-auto",
              "center": "mx-auto",
              "right": "ml-auto",
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