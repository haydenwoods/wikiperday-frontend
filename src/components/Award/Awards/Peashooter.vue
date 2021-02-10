<template>
  <Award title="Peashooter" description="Awarded to the player with the lowest average per-turn score.">
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
    name: "Peashooter",
    components: {
      Award,
      PlayCircle,
    }
  });
</script>