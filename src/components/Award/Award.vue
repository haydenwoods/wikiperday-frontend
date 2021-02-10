<template>
  <div class="flex flex-col h-full pt-3 pb-6">
    <div class="flex justify-center">
      <Icon size="xxlg" dropshadow>
        <slot name="icon"></slot>
      </Icon>
    </div>

    <div class="pt-4">
      <Title size="md" align="center">{ NAME } is the</Title> 
      <Title size="xmd" align="center" class="pt-3 font-extrabold">{{ title }}</Title>
    </div>

    <div class="mt-auto">
      <Paragraph align="center">
        {{ description }}
      </Paragraph>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { parseStyles } from "@/helpers/styles";

  import Title from "@/components/Text/Title.vue";
  import Paragraph from "@/components/Text/Paragraph.vue";
  import Icon from "@/components/Icon/Icon.vue";

  export default defineComponent({
    name: "Award",
    props: {
      title: {
        type: String,
      },
      icon: {
        type: String,
      },
      description: {
        type: String,
      }
    },
    components: {
      Title,
      Icon,
      Paragraph,
    }
  });
</script>