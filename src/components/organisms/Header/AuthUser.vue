<template>
  <Dropdown type="text">
    {{ name }}

    <template v-slot:menu>
      <Menu>
        <MenuItem>
          <Icon size="sm" icon="cog"></Icon>
          <Spacer vertical multiplier="2"/>
          <Text>Account settings</Text>
        </MenuItem>

        <MenuItem @click="onSignout">
          <Icon size="sm" icon="logout"></Icon>
          <Spacer vertical multiplier="2"/>
          <Text>Sign out</Text>
        </MenuItem>
      </Menu>
    </template>
  </Dropdown>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import { useStore, } from "vuex";

  import { getUserFullName } from "@/helpers/user";

  import Dropdown from "@/components/organisms/Dropdown.vue";

  import Menu from "@/components/atoms/Menu.vue";
  import MenuItem from "@/components/atoms/MenuItem.vue";
  import Text from "@/components/atoms/Text.vue";
  import Icon from "@/components/atoms/Icon/Icon.vue";
  import Spacer from "@/components/atoms/Spacer.vue";

  export default defineComponent({
    name: "AuthUser",
    components: {
      Dropdown,
      Menu,
      MenuItem,
      Text,
      Icon,
      Spacer,
    },
    setup() {
      const store = useStore();

      const user = computed(() => store.state?.auth?.user);
      const name = getUserFullName(user.value);

      const onSignout = () => store.dispatch("auth/signout");

      return {
        user,
        name,
        onSignout,
      }
    },
  });
</script>