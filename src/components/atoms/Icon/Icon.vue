<template>
  <div :name="`icon-${icon}`" :class="classes">
    <component :class="classes" :is="icon"></component>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, PropType } from "vue";
  import { propsToClasses, } from "@/helpers/styles";

  import { Size } from "@/types/styles";

  import bookmark from "./Icons/bookmark.vue";
  import chevronDown from "./Icons/chevronDown.vue";
  import chevronRight from "./Icons/chevronRight.vue";
  import cog from "./Icons/cog.vue";
  import dailyread from "./Icons/dailyread.vue";
  import home from "./Icons/home.vue";
  import lock from "./Icons/lock.vue";
  import logout from "./Icons/logout.vue";
  import mail from "./Icons/mail.vue";
  import userCircle from "./Icons/userCircle.vue";
  import userGroup from "./Icons/userGroup.vue";
  import x from "./Icons/x.vue";

  type Type = "primary" | "secondary" | "tertiary";

  export default defineComponent({
    name: "Icon",
    components: {
      bookmark,
      chevronRight,
      chevronDown,
      cog,
      dailyread,
      home,
      lock,
      logout,
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
      type: {
        type: String as PropType<Type>,
        default: "primary",
      }
    },
    setup(props) {
      const classes = computed(() => propsToClasses({
        defaults: "text-text-secondary",
        styles: [
          {
            value: props.size,
            values: {
              "xsm": "h-4",
              "sm": "h-5",
              "md": "h-6",
              "lg": "h-7",
              "xlg": "h-9",
              "xxlg": "h-11",
            },
          },
          {
            value: props.type,
            values: {
              "primary": "text-text-primary",
              "secondary": "text-text-secondary",
              "tertiary": "text-text-tertiary",
            }
          }
        ],
      }));  
      
      return {
        classes,
      }
    },
  });
</script>