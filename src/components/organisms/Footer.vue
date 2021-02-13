<template>
  <div class="flex flex-col pb-4">
    <Text
      align="center"
      size="sm"
    >
      Powered by
      <Linker 
        type="external" 
        to="https://genvis.co"
        display="bold"
        newtab
      >
        genvis
      </Linker>
      | © 2020
    </Text>

    <Spacer
      horizontal
      multiplier="1.5"
    />

    <Text
      align="center"
      size="sm"
      class="text-text-secondary"
    >
      <Linker 
        type="external" 
        to="https://genvis.co/privacy"
        newtab
      >
        Privacy Policy
      </Linker>
      | 
      <Linker 
        type="external" 
        to="https://genvis.co/terms"
        newtab
      >
        Terms of Service
      </Linker>
    </Text>
  </div>
</template>

<script lang="ts">
  import { defineComponent, } from "vue";

  import Text from "@/components/atoms/Text.vue";
  import Spacer from "@/components/atoms/Spacer.vue";
  import Linker from "@/components/atoms/Linker.vue";

  export default defineComponent({
    name: "Footer",  
    components: {
      Text,
      Spacer,
      Linker,
    },
  });
</script>