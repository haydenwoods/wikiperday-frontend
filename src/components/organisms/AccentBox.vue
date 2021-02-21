<template>
  <div :class="classes">
    <slot>
      <div class="h-full w-full flex items-center justify-center">
        <div>
          <Title type="tertiary" size="sm" align="center">
            {{ title }}
          </Title>
          <Title type="tertiary" size="md" align="center">
            {{ subtitle }}
          </Title>
        </div>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import { propsToClasses, } from "@/helpers/styles";

  import Title from "@/components/atoms/Title.vue";

  export default defineComponent({
    name: "AccentBox",
    components: {
      Title,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        required: true,
      },
      color: {
        type: String,
      },
      size: {
        type: String,
        default: "md",
      }
    },
    setup(props) {
      const classes = computed(() => propsToClasses({
        defaults: "inline-block rounded-xl flex-shrink-0 flex-grow-0",
        styles: [
          {
            value: props.color ? true : false,
            values: {
              "true": `bg-${props.color}`,
              "false": "bg-accent-primary",
            }
          },
          {
            value: props.size,
            values: {
              "sm": "h-14 w-14",
              "md": "h-20 w-20",
              "lg": "h-24 w-24",
              "xlg": "h-28 w-28",
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