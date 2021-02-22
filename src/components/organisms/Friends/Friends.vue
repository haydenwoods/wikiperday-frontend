<template>
  <Container v-if="hasFriends">
    <div class="w-full flex flex-col">
      <Linker to="/friends">
        <Title>
          <div class="flex flex-row items-center">
            Friends
            <Icon name="chevronRight" type="secondary"/>
          </div>
        </Title>
      </Linker>

      <div class="flex-row pt-4">
        <Friend v-for="user in friends" :key="user._id" :user="user"/>
      </div>
    </div>
  </Container>
</template>

<script lang="ts">
  import { defineComponent, computed, } from "vue";

  import { getUser, getUserFriends } from "@/helpers/user";

  import Friend from "@/components/organisms/Friends/Friend.vue";
  import Linker from "@/components/atoms/Linker.vue";
  import Button from "@/components/atoms/Button.vue";
  import Container from "@/components/atoms/Container.vue";
  import Title from "@/components/atoms/Title.vue";
  import Icon from "@/components/atoms/Icon/Icon.vue";

  export default defineComponent({
    name: "Friends",
    components: {
      Friend,
      Linker,
      Button,
      Container,
      Title,
      Icon,
    },
    setup() {
      const user = getUser();

      const friends = computed(() => getUserFriends(user?.value));
      const hasFriends = computed(() => friends.value?.length > 0);

      return {
        friends,
        hasFriends,
      }
    }
  });
</script>