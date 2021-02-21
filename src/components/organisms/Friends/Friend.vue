<template>
  <div class="flex flex-row last:border-b-0 border-b border-solid border-border-primary pt-4 pb-4 first:pt-0 last:pb-0 items-center">
    <Button type="text" height="none">
      <div class="h-10 w-10 rounded-full bg-gray-200"></div>
      <Spacer vertical multiplier="4"/>
      <Text size="lg">{{ fullName }}</Text>
    </Button>

    <div class="flex flex-row ml-auto" v-if="controls === 'request'">
      <Button type="text">
        <Icon name="xCircle" size="lg" type="secondary"/>
      </Button>
      <Spacer vertical multiplier="2"/>
      <Button type="text">
        <Icon name="checkCircle" size="lg" type="success"/>
      </Button>
    </div>

    <div class="flex flex-row ml-auto" v-if="controls === 'manage'">
      <Dropdown type="text">
        <Icon name="cog" size="lg"/>

        <template v-slot:menu>
          <Menu>
            <MenuItem>
              <Icon size="sm" name="trash"/>
              <Spacer vertical multiplier="2"/>
              <Text>Remove</Text>
            </MenuItem>
          </Menu>
        </template>
      </Dropdown>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from "vue";

  import { User } from "@/types/user";
  import { getUserFullName } from "@/helpers/user";

  import Text from "@/components/atoms/Text.vue";
  import Icon from "@/components/atoms/Icon/Icon.vue";
  import Spacer from "@/components/atoms/Spacer.vue";
  import Menu from "@/components/atoms/Menu.vue";
  import MenuItem from "@/components/atoms/MenuItem.vue";
  import Button from "@/components/atoms/Button.vue";
  import Dropdown from "@/components/organisms/Dropdown.vue";

  type Controls = "request" | "manage";

  export default defineComponent({
    name: "Friend",
    components: { 
      Text,
      Icon,
      Spacer,
      Menu,
      MenuItem,
      Button,
      Dropdown,
    },
    props: {
      user: {
        type: Object as PropType<User>,
      },
      controls: {
        type: String as PropType<Controls>,
      }
    },
    setup(props) {
      return {
        fullName: getUserFullName(props.user),
      }
    },
  });
</script>