<template>
  <Award title="Sharpshooter" description="Awarded to the player with the most amount of non-zero scores.">
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
    name: "Sharpshooter",
    components: {
      Award,
      PlayCircle,
    }
  });
</script>