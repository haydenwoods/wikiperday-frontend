<template>
  <Page>
    <div class="w-full grid grid-cols-2 gap-20">
      <div class="w-full">
        <div class="flex flex-row items-center mb-8">
          <div>
            <Title>Friends</Title>
            <Title type="secondary" size="sm">You have {{ friendsCount }} friend{{ friendsCount !== 1 ? "s" : "" }}.</Title>
          </div>

          <div class="ml-auto">
            <Button type="primary" @click="openModal('addFriend')">
              <Icon name="plusCircle" size="sm" type="tertiary"/>
              <Spacer vertical multiplier="2"/>
              Add friend
            </Button>
          </div>
        </div>
        <Container>
          <Friend v-for="user in friends" :key="user._id" :user="user" controls="manage"/>
        </Container>
      </div>

      <div class="flex flex-col w-full">
        <div>
          <div class="mb-8">
            <Title>Requests</Title>
            <Title type="secondary" size="sm">You have {{ totalRequestsCount }} unanswered friend request{{ totalRequestsCount !== 1 ? "s" : "" }}.</Title>
          </div>
          <Container>
            <Friend v-for="user in requests" :key="user._id" :user="user" controls="request"/>
          </Container>
        </div>

        <Spacer horizontal multiplier="10"/>

        <div>
          <div class="mb-8">
            <Title>Outgoing</Title>
          </div>
          <Container>
            <Friend v-for="user in outgoingRequests" :key="user._id" :user="user" controls="outgoingRequest"/>
          </Container>
        </div>
      </div>
    </div>
  </Page>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import { useStore } from "vuex";
  
  import { 
    getUser, 
    getUserFriends, 
    getUserRequests,
    getUserOutgoingRequests,
  } from "@/helpers/user";

  import Page from "@/components/templates/Page.vue";
  import Friend from "@/components/organisms/Friends/Friend.vue";
  import Title from "@/components/atoms/Title.vue";
  import Spacer from "@/components/atoms/Spacer.vue";
  import Icon from "@/components/atoms/Icon/Icon.vue";
  import Container from "@/components/atoms/Container.vue";
  import Button from "@/components/atoms/Button.vue";

  export default defineComponent({
    name: "Friends",
    components: { 
      Page,
      Friend,
      Title,
      Spacer,
      Icon,
      Container,
      Button,
    },
    setup() {
      const store = useStore();
      const user = getUser();

      const friends = computed(() => getUserFriends(user?.value));
      const friendsCount = computed(() => friends.value?.length);
      const hasFriends = computed(() => friends.value?.length > 0);

      const requests = computed(() => getUserRequests(user?.value));
      const requestsCount = computed(() => requests.value?.length);

      const outgoingRequests = computed(() => getUserOutgoingRequests(user?.value));
      const outgoingRequestsCount = computed(() => requests.value?.length);

      const totalRequestsCount = computed(() => requestsCount?.value + outgoingRequestsCount?.value);

      return {
        friends,
        friendsCount,
        hasFriends,
        requests,
        requestsCount,
        outgoingRequests,
        outgoingRequestsCount,
        totalRequestsCount,
        openModal: (modalName: string) => store.commit("modals/openModal", modalName),
      }
    }
  });
</script>