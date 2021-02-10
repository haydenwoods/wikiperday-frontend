<template>
  <Container :class="getClass">
    <Title v-if="title" class="whitespace-nowrap overflow-hidden overflow-ellipsis" size="xsm" type="light">{{ title }}</Title>
    <slot/>
  </Container>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { parseStyles } from "@/helpers/styles";

  import Title from "@/components/Text/Title.vue";
  import Container from "@/components/Container/Container.vue";

  type Type = "quarter" | "full" | "award";

  export default defineComponent({
    name: "Tile",
    props: {
      title: {
        type: String,
      },
      type: {
        type: String as () => Type,
      },
    },
    computed: {
      getClass(): string {
        return parseStyles({
          defaults: "px-7 py-6 flex flex-col box-border",
          styles: {
            types: {
              value: this.type || "",
              values: {
                "scoreboard": "w-1/4 h-52 mr-8 last:mr-0",
                "award": "w-1/4 h-96 mr-8 last:mr-0",
                "full": "w-full overflow-y-scroll flex-grow",
              }
            },  
          }
        });
      },
    },
    components: {
      Title,
      Container,
    }
  });
</script>