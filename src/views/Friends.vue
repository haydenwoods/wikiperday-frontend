<template>
  <Page>
    <div class="w-full grid grid-cols-2 gap-8">
      <div class="w-full">
        <div class="mb-8">
          <Title>Friends</Title>
          <Title type="secondary" size="sm">You have {{ friendsCount }} friend{{ friendsCount !== 1 ? "s" : "" }}.</Title>
        </div>
        <Container>
          <Friend v-for="user in friends" :key="user._id" :user="user" controls="manage"/>
        </Container>
      </div>

      <div class="w-full">
        <div class="mb-8">
          <Title>Requests</Title>
          <Title type="secondary" size="sm">You have {{ requestsCount }} unanswered friend request{{ requestsCount !== 1 ? "s" : "" }}.</Title>
        </div>
        <Container>
          <Friend v-for="user in requests" :key="user._id" :user="user" controls="request"/>
        </Container>
      </div>
    </div>
  </Page>
</template>

<script lang="ts">
  import { defineComponent, } from "vue";
  
  import { getUserFriends, getUserRequests } from "@/helpers/user";

  import Page from "@/components/templates/Page.vue";
  import Friend from "@/components/organisms/Friends/Friend.vue";
  import Title from "@/components/atoms/Title.vue";
  import Container from "@/components/atoms/Container.vue";

  export default defineComponent({
    name: "Friends",
    components: { 
      Page,
      Friend,
      Title,
      Container,
    },
    setup() {
      const friends = getUserFriends();
      const friendsCount = friends.value?.length;
      const hasFriends = friends.value?.length > 0;

      const requests = getUserRequests();
      const requestsCount = requests.value?.length;

      return {
        friends,
        friendsCount,
        hasFriends,
        requests,
        requestsCount,
      }
    }
  });
</script>