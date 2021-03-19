<template>
  <Dropdown type="text">
    {{ fullName }}

    <template #menu>
      <wd-menu>
        <wd-menu-item>
          <wd-icon size="sm" name="cog" />
          <wd-spacer size="2" />
          <wd-text>Account settings</wd-text>
        </wd-menu-item>

        <wd-menu-item @click="onSignout">
          <wd-icon size="sm" name="logout" />
          <wd-spacer size="2" />
          <wd-text>Sign out</wd-text>
        </wd-menu-item>
      </wd-menu>
    </template>
  </Dropdown>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import { AuthModule } from "@/store/modules/auth";

  import { getUserFullName } from "@/helpers/user";

  import Dropdown from "@/components/organisms/Dropdown.vue";

  export default defineComponent({
    name: "AuthUser",
    components: {
      Dropdown,
    },
    setup() {
      const user = computed(() => AuthModule.getUser);

      return {
        fullName: computed(() => getUserFullName(user?.value)),
        onSignout: () => AuthModule.signout(),
      };
    },
  });
</script>
