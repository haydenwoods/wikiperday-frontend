<template>
  <wd-container>
    <div class="w-full flex flex-col">
      <wd-title>
        <router-link to="/friends">
          <div class="flex flex-row items-center">
            Friends
            <wd-icon name="chevronRight" type="secondary" />
          </div>
        </router-link>
      </wd-title>

      <wd-spacer side="ver" size="1" />

      <div class="flex-row pt-4">
        <Friend v-for="user in friends" :key="user._id" :user="user" />
        <Empty v-if="!hasFriends" icon="userGroup">
          Friends will show here.
        </Empty>
      </div>
    </div>
  </wd-container>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";

  import { AuthModule } from "@/store/modules/auth";

  import { getUserFriends } from "@/helpers/user";

  import Friend from "@/components/organisms/Friends/Friend.vue";
  import Empty from "@/components/organisms/Empty.vue";

  export default defineComponent({
    name: "Friends",
    components: {
      Friend,
      Empty,
    },
    setup() {
      const user = computed(() => AuthModule.getUser);
      const friends = computed(() => getUserFriends(user?.value));
      const hasFriends = computed(() => friends?.value?.length > 0);

      return {
        friends,
        hasFriends,
      };
    },
  });
</script>
