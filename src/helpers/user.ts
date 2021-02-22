import { computed, ComputedRef } from "vue";
import { useStore } from "vuex";
import { User } from "@/types/user";

export const getUser = (): ComputedRef<User> => {
  return computed((): User => {  
    const store = useStore();

    const user: User = store.state?.auth?.user;

    return user;
  });
}

export const getUserFirstName = (user: User) => {
  const firstName = user?.firstName;

  return firstName;
}

export const getUserFullName = (user: User) => {
  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const fullName = `${firstName} ${lastName}`;

  return fullName;
}

export const getUserFriends = (user: User) => {
  const friends = user?.friends;
  return friends;
}

export const getUserRequests = (user: User) => {
  const friends = user?.incomingFriendRequests;
  return friends;
}

export const getUserOutgoingRequests = (user: User) => {
  const friends = user?.outgoingFriendRequests;
  return friends;
}