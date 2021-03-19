<template>
  <div :name="`icon-${name}`" :class="classes">
    <component :class="classes" :is="name"></component>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, PropType } from "vue";
  import { propsToClasses } from "@/helpers/styles";

  import { Size } from "@/types/props";

  import beaker from "./Icons/beaker.vue";
  import bookmark from "./Icons/bookmark.vue";
  import checkCircle from "./Icons/checkCircle.vue";
  import chevronDown from "./Icons/chevronDown.vue";
  import chevronRight from "./Icons/chevronRight.vue";
  import chip from "./Icons/chip.vue";
  import cloudUpload from "./Icons/cloudUpload.vue";
  import cog from "./Icons/cog.vue";
  import dailyread from "./Icons/dailyread.vue";
  import eye from "./Icons/eye.vue";
  import home from "./Icons/home.vue";
  import inbox from "./Icons/inbox.vue";
  import lock from "./Icons/lock.vue";
  import logout from "./Icons/logout.vue";
  import mail from "./Icons/mail.vue";
  import musicNote from "./Icons/musicNote.vue";
  import paperMap from "./Icons/paperMap.vue";
  import plusCircle from "./Icons/plusCircle.vue";
  import trash from "./Icons/trash.vue";
  import userCircle from "./Icons/userCircle.vue";
  import userGroup from "./Icons/userGroup.vue";
  import x from "./Icons/x.vue";
  import xCircle from "./Icons/xCircle.vue";

  type Type = "primary" | "secondary" | "tertiary";

  export default defineComponent({
    name: "Icon",
    components: {
      beaker,
      bookmark,
      checkCircle,
      chevronDown,
      chevronRight,
      chip,
      cloudUpload,
      cog,
      dailyread,
      eye,
      home,
      inbox,
      lock,
      logout,
      mail,
      musicNote,
      paperMap,
      plusCircle,
      trash,
      userCircle,
      userGroup,
      x,
      xCircle,
    },
    props: {
      name: {
        type: String,
      },
      size: {
        type: String as PropType<Size>,
        default: "md",
      },
      type: {
        type: String as PropType<Type>,
        default: "primary",
      },
    },
    setup(props) {
      const classes = computed(() =>
        propsToClasses([
          {
            value: props.size,
            values: {
              xsm: "h-4",
              sm: "h-5",
              md: "h-6",
              lg: "h-7",
              xlg: "h-12",
              xxlg: "h-14",
            },
          },
          {
            value: props.type,
            values: {
              primary: "text-text-primary",
              secondary: "text-text-secondary",
              tertiary: "text-text-tertiary",
              success: "text-accent-green",
              error: "text-accent-red",
            },
          },
        ])
      );

      return {
        classes,
      };
    },
  });
</script>
