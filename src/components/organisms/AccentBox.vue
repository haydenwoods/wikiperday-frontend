<template>
  <div :class="classes">
    <div>
      <Title type="tertiary" size="sm" align="center">
        {{ title }}
      </Title>
      <Title type="tertiary" size="md" align="center">
        {{ subtitle }}
      </Title>
    </div>
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
    },
    setup(props) {
      const classes = computed(() => propsToClasses({
        defaults: "h-20 w-20 rounded-xl flex justify-center items-center",
        styles: [
          {
            value: props.color ? true : false,
            values: {
              "true": `bg-${props.color}`,
              "false": "bg-accent-primary",
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