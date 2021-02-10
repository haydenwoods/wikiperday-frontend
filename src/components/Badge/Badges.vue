<template>
  <div class="flex flex-row h-full items-center">
    <div v-for="(badge, i) in badges" :key="i" class="pr-2">
      <component v-bind:is="getBadgeComponent(badge)"></component>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Badges, Badge } from "@/types/badges";

  import Color from "@/components/Badge/Badges/Color.vue";
  import Verified from "@/components/Badge/Badges/Verified.vue";

  export default defineComponent({ 
    name: "Badges",
    props: {
      badges: {
        type: Array as () => Badges,
      }
    },
    methods: {
      getBadgeComponent(badge: Badge) {
        const badges: Record<string, any> = {
          "verified": Verified,
          "color": Color,
        };

        const badgeName = badge?.name;
        const badgeComponent = badges[badgeName];

        return badgeComponent;
      }
    }
  });
</script>
