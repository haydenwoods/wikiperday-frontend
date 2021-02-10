<template>
  <Badge>
    <Icon size="md">
      <BadgeCheck/>
    </Icon>
  </Badge>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { ColorOptions } from "@/types/badges";

  import Badge from "@/components/Badge/Badge.vue";
  import Icon from "@/components/Icon/Icon.vue";
  import BadgeCheck from "@/components/Icon/Icons/BadgeCheck.vue";

  export default defineComponent({ 
    name: "Color",
    props: {
      options: {
        type: Object as () => ColorOptions,
      },  
    },
    components: {
      Badge,
      Icon,
      BadgeCheck,
    }
  });
</script>
