<template>
  <div :name="`icon-${icon}`" :class="classes">
    <component :class="classes" :is="icon"></component>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, PropType } from "vue";
  import { propsToClasses, } from "@/helpers/styles";

  import { Size } from "@/types/styles";

  import lock from "./Icons/lock.vue";
  import mail from "./Icons/mail.vue";
  import userCircle from "./Icons/userCircle.vue";
  import userGroup from "./Icons/userGroup.vue";
  import x from "./Icons/x.vue";

  export default defineComponent({
    name: "Icon",
    components: {
      lock,
      mail,
      userCircle,
      userGroup,
      x,
    },
    props: {
      icon: {
        type: String,
      },
      size: {
        type: String as PropType<Size>,
        default: "md",
      },
    },
    setup(props) {
      const classes = computed(() => propsToClasses({
        defaults: "",
        styles: [
          {
            value: props.size,
            values: {
              "xsm": "h-4",
              "sm": "h-5",
              "md": "h-6",
              "lg": "h-8",
              "xlg": "h-10",
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