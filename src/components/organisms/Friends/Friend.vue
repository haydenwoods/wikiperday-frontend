<template>
  <div
    class="flex flex-row last:border-b-0 border-b border-solid border-border-primary pt-4 pb-4 first:pt-0 last:pb-0 items-center"
  >
    <wd-button @click="viewFriend" type="text">
      <div class="flex flex-row items-center">
        <div class="h-10 w-10 rounded-full bg-gray-200"></div>
        <wd-spacer size="4" />
        <wd-text size="lg">{{ fullName }}</wd-text>
      </div>
    </wd-button>

    <div class="flex flex-row ml-auto" v-if="type === 'friend'">
      <Dropdown type="text" :showArrow="false">
        <wd-icon name="cog" size="lg" />

        <template #menu>
          <wd-menu>
            <wd-menu-item @click="viewFriend">
              <wd-icon size="sm" name="eye" />
              <wd-spacer size="2" />
              <wd-text>View</wd-text>
            </wd-menu-item>
            <wd-menu-item @click="removeFriend">
              <wd-icon size="sm" name="trash" />
              <wd-spacer size="2" />
              <wd-text>Remove</wd-text>
            </wd-menu-item>
          </wd-menu>
        </template>
      </Dropdown>
    </div>

    <div class="flex flex-row ml-auto" v-if="type === 'request'">
      <wd-button type="text" @click="declineRequest">
        <wd-icon name="xCircle" size="lg" type="secondary" />
      </wd-button>
      <wd-spacer size="2" />
      <wd-button type="text" @click="acceptRequest">
        <wd-icon name="checkCircle" size="lg" />
      </wd-button>
    </div>

    <div class="flex flex-row ml-auto" v-if="type === 'outgoingRequest'">
      <wd-button type="text" @click="cancelRequest">
        <wd-icon name="xCircle" size="lg" type="secondary" />
      </wd-button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from "vue";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";
  import { getModule } from "vuex-module-decorators";

  import Friends from "@/store/modules/friends";

  import { User } from "@/types/user";
  import { getUserFullName } from "@/helpers/user";

  import Dropdown from "@/components/organisms/Dropdown.vue";

  type Type = "friend" | "request" | "outgoingRequest";

  export default defineComponent({
    name: "Friend",
    components: {
      Dropdown,
    },
    props: {
      user: {
        type: Object as PropType<User>,
        required: true,
      },
      type: {
        type: String as PropType<Type>,
      },
    },
    setup(props) {
      const store = useStore();
      const router = useRouter();

      const friendsModule = getModule(Friends, store);
      const userId = computed(() => props.user._id);
      const url =
        !props.type || props.type === "friend"
          ? `/friends/${userId?.value}`
          : null;

      return {
        fullName: computed(() => getUserFullName(props.user)),
        acceptRequest: () => friendsModule.accept({ id: userId?.value }),
        declineRequest: () => friendsModule.decline({ id: userId?.value }),
        cancelRequest: () => friendsModule.cancel({ id: userId?.value }),
        removeFriend: () => friendsModule.remove({ id: userId?.value }),
        viewFriend: () => url && router.push(url),
      };
    },
  });
</script>
