<template>
  <div class="flex flex-row last:border-b-0 border-b border-solid border-border-primary pt-4 pb-4 first:pt-0 last:pb-0 items-center">
    <Button type="text" height="none">
      <div class="h-10 w-10 rounded-full bg-gray-200"></div>
      <Spacer vertical multiplier="4"/>
      <Text size="lg">{{ fullName }}</Text>
    </Button>

    <div class="flex flex-row ml-auto" v-if="controls === 'request'">
      <Button type="text" @click="declineRequest">
        <Icon name="xCircle" size="lg" type="secondary"/>
      </Button>
      <Spacer vertical multiplier="2"/>
      <Button type="text" @click="acceptRequest">
        <Icon name="checkCircle" size="lg"/>
      </Button>
    </div>

    <div class="flex flex-row ml-auto" v-if="controls === 'friend'">
      <Dropdown type="text" :showArrow="false">
        <Icon name="cog" size="lg"/>

        <template v-slot:menu>
          <Menu>
            <MenuItem @click="viewFriend">
              <Icon size="sm" name="eye"/>
              <Spacer vertical multiplier="2"/>
              <Text>View</Text>
            </MenuItem>
            <MenuItem @click="removeFriend">
              <Icon size="sm" name="trash"/>
              <Spacer vertical multiplier="2"/>
              <Text>Remove</Text>
            </MenuItem>
          </Menu>
        </template>
      </Dropdown>
    </div>

    <div class="flex flex-row ml-auto" v-if="controls === 'outgoingRequest'">
      <Button type="text" @click="cancelRequest">
        <Icon name="xCircle" size="lg" type="secondary"/>
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from "vue";
  import { useStore } from "vuex";
 
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
        required: true,
      },
      controls: {
        type: String as PropType<Controls>,
      }
    },
    setup(props) {
      const store = useStore();

      return {
        fullName: computed(() => getUserFullName(props.user)),
        acceptRequest: () => store.dispatch("friends/accept", { id: props.user._id }),
        declineRequest: () => store.dispatch("friends/decline", { id: props.user._id }),
        cancelRequest: () => store.dispatch("friends/cancel", { id: props.user._id }),
        removeFriend: () => store.dispatch("friends/remove", { id: props.user._id }),
      }
    },
  });
</script>