<template>
  <div class="mx-auto w-56 flex flex-col items-center">
    <Icon v-if="icon" :name="icon" size="xxlg" type="secondary" class="mb-2"/>
  <Text size="lg" align="center" type="secondary">{{ title }}</Text>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import Spacer from "@/components/atoms/Spacer.vue";
  import Text from "@/components/atoms/Text.vue";
  import Icon from "@/components/atoms/Icon/Icon.vue";

  export default defineComponent({
    name: "Empty",
    components: {
      Spacer,
      Text,
      Icon,
    },
    props: {
      icon: String,
      title: String,
    },
  });
</script>