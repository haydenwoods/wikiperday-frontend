<template>
  <Button :type="type" :width="width" :height="height" @click="onClick">
    <slot/>
    
    <div class="pl-1.5">
      <Icon 
        :class="iconClasses"
        icon="chevronDown" 
        size="xsm"
      />
    </div>

    <div :class="menuClasses">
      <slot name="menu"/>
    </div>
  </Button>
</template>

<script lang="ts">
  import { defineComponent, PropType, ref, computed } from "vue";
  import { propsToClasses, } from "@/helpers/styles";

  import Button, { Type, Width, Height, } from "@/components/atoms/Button.vue";
  import Icon from "@/components/atoms/Icon/Icon.vue";

  export default defineComponent({
    name: "Dropdown",
    components: {
      Button,
      Icon,
    },
    props: {
      type: String as PropType<Type>,
      width: String as PropType<Width>,
      height: String as PropType<Height>,
    },
    setup() {
      const menuOpen = ref(false);
      const onClick = () => menuOpen.value = !menuOpen.value;

      const iconClasses = computed(() => propsToClasses({
        defaults: "transition-transform",
        styles: [
          {
            value: menuOpen.value,
            values: {
              "true": "transform rotate-180",
              "false": "transform rotate-0",
            }
          },
        ],
      }));

      const menuClasses = computed(() => propsToClasses({
        defaults: "absolute top-full right-0 transition-all transform",
        styles: [
          {
            value: menuOpen.value,
            values: {
              "true": "opacity-100 translate-y-0",
              "false": "opacity-0 pointer-events-none select-none -translate-y-2",
            }
          },
        ],
      }));

      return {
        menuOpen,
        onClick,
        iconClasses,
        menuClasses,
      }
    },
  });
</script>