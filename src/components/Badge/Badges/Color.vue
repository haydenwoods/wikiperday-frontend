<template>
  <Badge>
    <div class="h-3 w-3 rounded-full bg-black"></div>
  </Badge>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { ColorOptions } from "@/types/badges";

  import Badge from "@/components/Badge/Badge.vue";

  export default defineComponent({ 
    name: "Color",
    props: {
      options: {
        type: Object as () => ColorOptions,
      },  
    },
    components: {
      Badge,
    }
  });
</script>
