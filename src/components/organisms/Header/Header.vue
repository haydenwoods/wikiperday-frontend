<template>
  <div class="h-14 border-b border-border-primary border-solid bg-background-primary">
    <div class="h-full flex flex-row px-6 items-center justify-between">
      <div>
        <Icon icon="dailyread" size="xlg"/>
      </div>  

      <NavBar/>

      <div class="flex">
        <AuthUser v-if="isLoggedIn"/>
        <AuthActions v-else/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { isLoggedIn } from "@/helpers/auth";

  import Icon from "@/components/atoms/Icon/Icon.vue";

  import NavBar from "@/components/organisms/Header/NavBar.vue";
  import AuthActions from "@/components/organisms/Header/AuthActions.vue";
  import AuthUser from "@/components/organisms/Header/AuthUser.vue";

  export default defineComponent({
    name: "Header",
    components: {
      Icon,
      NavBar,
      AuthActions,
      AuthUser,
    },
    setup() {
      return {
        isLoggedIn: isLoggedIn(),
      }
    }
  });
</script>