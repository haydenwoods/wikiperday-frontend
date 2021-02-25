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
            <Button type="primary" @click="openModal({ name: 'AddFriendModal' })">
              <Icon name="plusCircle" size="sm" type="tertiary"/>
              <Spacer vertical multiplier="2"/>
              Add friend
            </Button>
          </div>
        </div>
        <Container>
          <Friend v-for="user in friends" :key="user._id" :user="user" controls="friend"/>
          <Empty v-if="!hasFriends" icon="userGroup">
            Friends will show here. <br/> Use 
            <Button type="text" height="sm" @click="openModal({ name: 'AddFriendModal' })">
              <Text size="lg" type="accent">
                Add Friend
              </Text>
            </Button> 
            to find them by email.
          </Empty>
        </Container>
      </div>

      <div class="flex flex-col w-full">
        <div>
          <div class="mb-8">
            <Title>Requests</Title>
            <Title type="secondary" size="sm">You have {{ requestsCount }} unanswered friend request{{ requestsCount !== 1 ? "s" : "" }}.</Title>
          </div>
          <Container>
            <Friend v-for="user in requests" :key="user._id" :user="user" controls="request"/>
            <Empty v-if="!hasRequests" icon="inbox">
              Friend requests will <br/> show here.
            </Empty>
          </Container>
        </div>

        <Spacer horizontal multiplier="10"/>

        <div>
          <div class="mb-8">
            <Title>Outgoing</Title>
          </div>
          <Container>
            <Friend v-for="user in outgoingRequests" :key="user._id" :user="user" controls="outgoingRequest"/>
            <Empty v-if="!hasOutgoingRequests" icon="cloudUpload">
              Outgoing requests will show here.
            </Empty>
          </Container>
        </div>
      </div>
    </div>
  </Page>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import { ModalsModule } from "@/store/modules/modals"; 

  import { 
    getUser, 
    getUserFriends, 
    getUserRequests,
    getUserOutgoingRequests,
  } from "@/helpers/user";

  import Page from "@/components/templates/Page.vue";
  import Friend from "@/components/organisms/Friends/Friend.vue";
  import Empty from "@/components/organisms/Empty.vue";
  import Title from "@/components/atoms/Title.vue";
  import Text from "@/components/atoms/Text.vue";
  import Spacer from "@/components/atoms/Spacer.vue";
  import Icon from "@/components/atoms/Icon/Icon.vue";
  import Container from "@/components/atoms/Container.vue";
  import Button from "@/components/atoms/Button.vue";

  export default defineComponent({
    name: "Friends",
    components: { 
      Page,
      Friend,
      Empty,
      Title,
      Text,
      Spacer,
      Icon,
      Container,
      Button,
    },
    setup() {
      const user = getUser();

      const friends = computed(() => getUserFriends(user?.value));
      const friendsCount = computed(() => friends.value?.length);
      const hasFriends = computed(() => friendsCount.value > 0);

      const requests = computed(() => getUserRequests(user?.value));
      const requestsCount = computed(() => requests.value?.length);
      const hasRequests = computed(() => requestsCount.value > 0);

      const outgoingRequests = computed(() => getUserOutgoingRequests(user?.value));
      const outgoingRequestsCount = computed(() => outgoingRequests.value?.length);
      const hasOutgoingRequests = computed(() => outgoingRequestsCount.value > 0);

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
        openModal: ({ name }: { name: string }) => ModalsModule.openModal({ name }),
      }
    }
  });
</script>