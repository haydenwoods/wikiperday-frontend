<template>
  <Page>
    <div class="flex flex-row">
      <div class="w-3/4">
        <div class="w-full flex flex-row mb-8">
          <AccentBox title="DAY" :subtitle="dayCount" />

          <div class="flex-grow self-center ml-6">
            <wd-title size="lg">Welcome back {{ firstName }},</wd-title>
            <wd-title size="sm" type="secondary">
              Your daily article is ready for you to read.
            </wd-title>
          </div>
        </div>

        <div v-for="(userArticle, i) in user?.articles" :key="i" class="mb-12">
          <Article v-bind="userArticle" />
        </div>
      </div>

      <wd-spacer size="12" />

      <div class="w-1/4">
        <Friends class="mb-12" />
        <Categories class="mb-12" />
      </div>
    </div>
  </Page>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";

  import { AuthModule } from "@/store/modules/auth";

  import { getUserFirstName } from "@/helpers/user";

  import Page from "@/components/templates/Page.vue";
  import AccentBox from "@/components/organisms/AccentBox.vue";
  import Article from "@/components/organisms/Article/Article.vue";
  import Friends from "@/components/organisms/Friends/Friends.vue";
  import Categories from "@/components/organisms/Categories/Categories.vue";

  export default defineComponent({
    name: "Dashboard",
    components: {
      Page,
      AccentBox,
      Article,
      Friends,
      Categories,
    },
    setup() {
      const user = computed(() => AuthModule.user);

      return {
        user,
        dayCount: computed(() => user.value?.articles.length),
        firstName: computed(() => getUserFirstName(user?.value)),
      };
    },
  });
</script>
