<template>
  <div
    class="inline-block rounded-xl flex-shrink-0 flex-grow-0"
    :class="classes"
  >
    <slot>
      <div class="h-full w-full flex items-center justify-center">
        <div>
          <wd-title type="tertiary" size="sm" align="center">
            {{ title }}
          </wd-title>
          <wd-title type="tertiary" size="md" align="center">
            {{ subtitle }}
          </wd-title>
        </div>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import { propsToClasses } from "@/helpers/styles";

  export default defineComponent({
    name: "AccentBox",
    props: {
      title: {
        type: String,
      },
      subtitle: {
        type: String,
      },
      color: {
        type: String,
      },
      size: {
        type: String,
        default: "md",
      },
    },
    setup(props) {
      const classes = computed(() =>
        propsToClasses([
          {
            value: props.color ? true : false,
            values: {
              true: `bg-${props.color}`,
              false: "bg-accent-primary",
            },
          },
          {
            value: props.size,
            values: {
              sm: "h-14 w-14",
              md: "h-20 w-20",
              lg: "h-24 w-24",
              xlg: "h-28 w-28",
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
