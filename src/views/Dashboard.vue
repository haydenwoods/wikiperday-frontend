<template>
  <Page>
    <div class="flex flex-row" v-if="isLoggedIn">
      <div class="w-3/4">
        <div class="w-full flex flex-row mb-8">
          <AccentBox
            title="DAY"
            subtitle="5"
          />

          <div class="flex-grow self-center ml-6">
            <Title size="lg">Welcome back {{ firstName }},</Title>
            <Title size="sm" type="secondary">Your daily article is ready for you to read.</Title>
          </div>
        </div>
        <Article/>
      </div>
      <Spacer vertical multiplier="12"/>
      <div class="w-1/4">
        <Friends class="mb-12"/>
        <Categories class="mb-12"/>
      </div>
    </div>
  </Page>
</template>

<script lang="ts">
  import { defineComponent, } from "vue";

  import { getUserFirstName } from "@/helpers/user";
  import { isLoggedIn } from "@/helpers/auth";

  import Page from "@/components/templates/Page.vue";
  import Spacer from "@/components/atoms/Spacer.vue";
  import Title from "@/components/atoms/Title.vue";
  import AccentBox from "@/components/organisms/AccentBox.vue";
  import Article from "@/components/organisms/Article/Article.vue";
  import Friends from "@/components/organisms/Friends/Friends.vue";
  import Categories from "@/components/organisms/Categories/Categories.vue";

  export default defineComponent({
    name: "Dashboard",
    components: { 
      Page,
      Spacer,
      Title,
      AccentBox,
      Article,
      Friends,
      Categories,
    },
    setup() {
      return {
        isLoggedIn: isLoggedIn(),
        firstName: getUserFirstName(),
      }
    },  
  });
</script>