<template>
  <div class="h-14 border-b border-border-primary border-solid bg-background-primary">
    <div class="h-full flex flex-row px-6 items-center">
      <div class="flex-1">
        <Linker to="/">
          <Icon name="dailyread" size="xlg"/>
        </Linker>
      </div>  

      <NavBar/>

      <div class="flex flex-1 basis justify-end">
        <AuthUser v-if="isLoggedIn"/>
        <AuthActions v-else/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { isLoggedIn } from "@/helpers/auth";

  import Linker from "@/components/atoms/Linker.vue";
  import Icon from "@/components/atoms/Icon/Icon.vue";
  
  import NavBar from "@/components/organisms/Header/NavBar.vue";
  import AuthActions from "@/components/organisms/Header/AuthActions.vue";
  import AuthUser from "@/components/organisms/Header/AuthUser.vue";

  export default defineComponent({
    name: "Header",
    components: {
      Linker,
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