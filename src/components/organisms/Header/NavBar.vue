<template>
  <div class="flex items-center">
    <div class="h-10 w-10 bg-accent-primary flex items-center justify-center rounded-full">
      <Button type="text" height="sm">
        <Icon type="tertiary" icon="home" size="lg"/>
      </Button>
    </div>

    <Spacer vertical multiplier="10"/>
    
    <Button type="text" height="sm">
      <Icon icon="bookmark" size="lg"/>
    </Button>

    <Spacer vertical multiplier="10"/>

    <Button type="text" height="sm">
      <Icon icon="cog" size="lg"/>
    </Button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, } from "vue";

  import Spacer from "@/components/atoms/Spacer.vue";
  import Button from "@/components/atoms/Button.vue";
  import Icon from "@/components/atoms/Icon/Icon.vue";

  export default defineComponent({
    name: "NavBar",
    components: {
      Spacer,
      Button,
      Icon,
    },
  });
</script>