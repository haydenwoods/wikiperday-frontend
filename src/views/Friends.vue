<template>
  <Page>
    <div class="w-full grid grid-cols-2 gap-20">
      <div class="w-full">
        <div class="flex flex-row items-center mb-8">
          <div>
            <wd-title>Friends</wd-title>
            <wd-title type="secondary" size="sm"
              >You have {{ friendsCount }} friend{{
                friendsCount !== 1 ? "s" : ""
              }}.</wd-title
            >
          </div>

          <div class="ml-auto">
            <wd-button
              type="primary"
              @click="openModal({ name: 'AddFriendModal' })"
            >
              <wd-icon name="plusCircle" size="sm" type="tertiary" />
              <wd-spacer size="2" />
              Add friend
            </wd-button>
          </div>
        </div>
        <wd-container>
          <Friend
            v-for="user in friends"
            :key="user._id"
            :user="user"
            type="friend"
          />
          <Empty v-if="!hasFriends" icon="userGroup">
            Friends will show here. <br />
            Use
            <wd-button
              type="text"
              height="sm"
              @click="openModal({ name: 'AddFriendModal' })"
            >
              <wd-text size="lg" type="accent"> Add Friend </wd-text>
            </wd-button>
            to find them by email.
          </Empty>
        </wd-container>
      </div>

      <div class="flex flex-col w-full">
        <div>
          <div class="mb-8">
            <wd-title>Requests</wd-title>
            <wd-title type="secondary" size="sm"
              >You have {{ requestsCount }} unanswered friend request{{
                requestsCount !== 1 ? "s" : ""
              }}.</wd-title
            >
          </div>
          <wd-container>
            <Friend
              v-for="user in requests"
              :key="user._id"
              :user="user"
              type="request"
            />
            <Empty v-if="!hasRequests" icon="inbox">
              Friend requests will <br />
              show here.
            </Empty>
          </wd-container>
        </div>

        <wd-spacer side="ver" size="10" />

        <div>
          <div class="mb-8">
            <wd-title>Outgoing</wd-title>
          </div>
          <wd-container>
            <Friend
              v-for="user in outgoingRequests"
              :key="user._id"
              :user="user"
              type="outgoingRequest"
            />
            <Empty v-if="!hasOutgoingRequests" icon="cloudUpload">
              Outgoing requests will show here.
            </Empty>
          </wd-container>
        </div>
      </div>
    </div>
  </Page>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";

  import { ModalsModule } from "@/store/modules/modals";
  import { AuthModule } from "@/store/modules/auth";

  import {
    getUserFriends,
    getUserRequests,
    getUserOutgoingRequests,
  } from "@/helpers/user";

  import Page from "@/components/templates/Page.vue";
  import Friend from "@/components/organisms/Friends/Friend.vue";
  import Empty from "@/components/organisms/Empty.vue";

  export default defineComponent({
    name: "Friends",
    components: {
      Page,
      Friend,
      Empty,
    },
    setup() {
      const user = computed(() => AuthModule.user);

      const friends = computed(() => getUserFriends(user?.value));
      const friendsCount = computed(() => friends.value?.length);
      const hasFriends = computed(() => friendsCount.value > 0);

      const requests = computed(() => getUserRequests(user?.value));
      const requestsCount = computed(() => requests.value?.length);
      const hasRequests = computed(() => requestsCount.value > 0);

      const outgoingRequests = computed(() =>
        getUserOutgoingRequests(user?.value)
      );
      const outgoingRequestsCount = computed(
        () => outgoingRequests.value?.length
      );
      const hasOutgoingRequests = computed(
        () => outgoingRequestsCount.value > 0
      );

      return {
        friends,
        friendsCount,
        hasFriends,
        requests,
        requestsCount,
        hasRequests,
        outgoingRequests,
        outgoingRequestsCount,
        hasOutgoingRequests,
        openModal: ({ name }: { name: string }) =>
          ModalsModule.openModal({ name }),
      };
    },
  });
</script>
