import { computed, ComputedRef } from "vue";

import { AuthModule } from "@/store/modules/auth";

import { User } from "@/types/user";

export const getUser = () => {
  return computed(() => {  
    const user = AuthModule?.user;
    return user;
  });
}

export const getUserFirstName = (user: User | null) => {
  const firstName = user?.firstName;
  return firstName;
}

export const getUserFullName = (user: User | null) => {
  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const fullName = `${firstName} ${lastName}`;
  return fullName;
}

export const getUserFriends = (user: User | null) => {
  const friends = user?.friends;
  return friends || [];
}

export const getUserRequests = (user: User | null) => {
  const friends = user?.incomingFriendRequests;
  return friends || [];
}

export const getUserOutgoingRequests = (user: User | null) => {
  const friends = user?.outgoingFriendRequests;
  return friends || [];
}