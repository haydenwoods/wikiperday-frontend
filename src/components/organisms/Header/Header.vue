<template>
  <div
    class="h-14 border-b border-border-primary border-solid bg-background-primary"
  >
    <div class="h-full flex flex-row px-6 items-center">
      <div class="flex-1">
        <wd-icon name="dailyread" size="lg" />
      </div>

      <NavBar v-if="isLoggedIn" />

      <div class="flex flex-1 basis justify-end">
        <AuthUser v-if="isLoggedIn" />
        <AuthActions v-else />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { getIsLoggedIn } from "@/helpers/auth";

  import NavBar from "@/components/organisms/Header/NavBar.vue";
  import AuthActions from "@/components/organisms/Header/AuthActions.vue";
  import AuthUser from "@/components/organisms/Header/AuthUser.vue";

  export default defineComponent({
    name: "Header",
    components: {
      NavBar,
      AuthActions,
      AuthUser,
    },
    setup() {
      return {
        isLoggedIn: getIsLoggedIn(),
      };
    },
  });
</script>
