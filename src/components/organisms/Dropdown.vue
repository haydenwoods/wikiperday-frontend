<template>
  <wd-button :type="type" :width="width" :height="height" @click="onClick">
    <slot />

    <div v-if="showArrow" class="pl-1.5">
      <wd-icon
        class="transition-transform duration-250"
        :class="iconClasses"
        name="chevronDown"
        size="xsm"
      />
    </div>

    <transition
      class="origin-top-right transition-opacity-transform duration-150"
      enter-from-class="opacity-0 transform scale-50"
      enter-to-class="opacity-100 transform scale-100"
      leave-from-class="opacity-100 transform scale-100"
      leave-to-class="opacity-0 transform scale-50"
    >
      <div v-if="menuOpen" class="absolute top-full right-0 z-20">
        <slot name="menu" />
      </div>
    </transition>
  </wd-button>
</template>

<script lang="ts">
  import { defineComponent, PropType, ref, computed } from "vue";
  import { propsToClasses } from "@/helpers/styles";

  import { Type, Width, Height } from "@/components/atoms/wdButton.vue";

  export default defineComponent({
    name: "Dropdown",
    props: {
      type: String as PropType<Type>,
      width: String as PropType<Width>,
      height: String as PropType<Height>,
      showArrow: {
        type: Boolean,
        default: true,
      },
    },
    setup() {
      const menuOpen = ref(false);
      const onClick = () => (menuOpen.value = !menuOpen.value);

      const iconClasses = computed(() =>
        propsToClasses([
          {
            value: menuOpen.value,
            values: {
              true: "transform rotate-180",
              false: "transform rotate-0",
            },
          },
        ])
      );

      const menuClasses = computed(() =>
        propsToClasses([
          {
            value: menuOpen.value,
            values: {
              true: "opacity-100 scale-100",
              false: "opacity-0 pointer-events-none select-none scale-50",
            },
          },
        ])
      );

      return {
        menuOpen,
        onClick,
        iconClasses,
        menuClasses,
      };
    },
  });
</script>
