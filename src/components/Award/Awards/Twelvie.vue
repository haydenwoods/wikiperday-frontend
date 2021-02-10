<template>
  <Award title="Twelvie" description="Awarded to the player with the highest amount of twelves.">
    <template v-slot:icon>
      <PlayCircle/>
    </template>
  </Award>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import Award from "@/components/Award/Award.vue";
  import PlayCircle from "@/components/Icon/Icons/PlayCircle.vue";

  export default defineComponent({
    name: "Twelvie",
    components: {
      Award,
      PlayCircle,
    }
  });
</script>