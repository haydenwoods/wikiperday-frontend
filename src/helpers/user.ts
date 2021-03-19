import { computed, ComputedRef } from "vue";

import { AuthModule } from "@/store/modules/auth";

import { User } from "@/types/user";

export const getUser = () => {
  return computed(() => {
    const user = AuthModule?.user;
    return user;
  });
};

export const getUserFirstName = (user: User | null) => {
  const firstName = user?.firstName;
  return firstName;
};

export const getUserFullName = (user: User | null) => {
  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const fullName = `${firstName} ${lastName}`;
  return fullName;
};

export const getUserFriends = (user: User | null) => {
  const friends = user?.friends;
  return friends || [];
};

export const getUserFriendIds = (user: User | null) => {
  const friends = getUserFriends(user);
  const friendIds = friends.map(({ _id }) => _id.toString());
  return friendIds || [];
};

export const getUserRequests = (user: User | null) => {
  const friends = user?.incomingFriendRequests;
  return friends || [];
};

export const getUserOutgoingRequests = (user: User | null) => {
  const friends = user?.outgoingFriendRequests;
  return friends || [];
};

export const getHasFriend = ({
  user,
  id,
}: {
  user: User | null;
  id: string;
}) => {
  const friendIds = getUserFriendIds(user);
  const hasFriend = friendIds.includes(id) ? true : false;
  return hasFriend;
};
