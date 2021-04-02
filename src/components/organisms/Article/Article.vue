<template>
  <wd-container>
    <div class="flex flex-row h-96">
      <div class="h-full w-96 flex-shrink-0 rounded-3xl overflow-hidden">
        <wd-image class="object-cover h-full w-full" :src="article.coverUrl" />
      </div>

      <div class="h-full pl-8 py-3 flex flex-col">
        <div class="flex flex-row pb-4 items-center">
          <AccentBox :title="month" :subtitle="date" />

          <div class="pl-6">
            <wd-title>
              {{ article.title }}
            </wd-title>
            <div class="overflow-ellipsis">
              <wd-title size="sm" type="secondary">
                {{ article.subtitle }}
              </wd-title>
            </div>
          </div>
        </div>

        <div class="overflow-hidden relative">
          <wd-text size="lg" ref="description">
            {{ article.description }}
          </wd-text>
          <div
            class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-background-secondary"
          ></div>
        </div>

        <div class="w-full pt-2">
          <wd-button type="text" height="xsm">
            Read more
            <wd-spacer size="1" />
            <wd-icon name="chevronRight" size="xsm" />
          </wd-button>
        </div>
      </div>
    </div>
  </wd-container>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from "vue";
  import { DateTime } from "luxon";

  import { Article } from "@/types/article";

  import AccentBox from "@/components/organisms/AccentBox.vue";

  export default defineComponent({
    name: "Article",
    components: {
      AccentBox,
    },
    props: {
      createdAt: String,
      article: {
        type: Object as PropType<Article>,
      },
    },
    setup(props) {
      const month = computed(() =>
        props.createdAt
          ? DateTime.fromISO(props.createdAt).toFormat("MMM").toUpperCase()
          : null
      );

      const date = computed(() =>
        props.createdAt
          ? DateTime.fromISO(props.createdAt).toFormat("dd")
          : null
      );

      return {
        month,
        date,
      };
    },
  });
</script>
