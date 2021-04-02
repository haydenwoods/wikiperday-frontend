<template>
  <Page>
    <div class="w-full relative">
      <div
        class="w-full h-72 rounded-3xl bg-gradient-to-bl from-purple-300 to-purple-500"
      ></div>
      <div
        class="w-60 h-60 absolute top-44 left-16 rounded-full bg-gray-200 border-8 border-background-primary border-solid"
      ></div>

      <div class="h-32 pl-80 pt-6">
        <wd-title size="lg">{{ name }}</wd-title>
        <wd-spacer side="ver" size="1" />
        <wd-text size="lg" type="secondary"
          >Joined on the 28th of February 2020</wd-text
        >
      </div>
    </div>

    <div class="w-full grid grid-cols-8 gap-0 mt-8">
      <div class="col-span-3">
        <Friends />
      </div>
    </div>
  </Page>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import { useRoute } from "vue-router";

  import { UserModule } from "@/store/modules/user";

  import { getUserName } from "@/helpers/user";

  import Page from "@/components/templates/Page.vue";
  import Friends from "@/components/organisms/Friends/Friends.vue";

  export default defineComponent({
    name: "Friend",
    components: {
      Page,
      Friends,
    },
    async setup() {
      const route = useRoute();
      const id = Array.isArray(route.params.id)
        ? route.params.id[0]
        : route.params.id;

      const user = await UserModule.getUser({ id });

      const name = computed(() => getUserName(user));

      return {
        user,
        name,
      };
    },
  });
</script>
