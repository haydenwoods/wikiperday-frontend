import { computed } from "vue";
import { useStore } from "vuex";
import { User } from "@/types/user";

export const getUser = () => {
  return computed((): User => {  
    const store = useStore();

    const user: User = store.state?.auth?.user;

    return user;
  }); 
}

export const getUserFirstName = (user?: User) => {
  return computed(() => {
    user = user ? user : getUser().value;

    const firstName = user?.firstName;

    return firstName;
  });
}

export const getUserFullName = (user?: User) => {
  return computed(() => {
    user = user ? user : getUser().value;

    const firstName = user?.firstName;
    const lastName = user?.lastName;
    const fullName = `${firstName} ${lastName}`;

    return fullName;
  });
}

export const getUserFriends = (user?: User) => {
  return computed(() => {
    user = user ? user : getUser().value;

    const friends = user?.friends;

    return friends;
  });
}

export const getUserRequests = (user?: User) => {
  return computed(() => {
    user = user ? user : getUser().value;

    const friends = user?.incomingFriendRequests;

    return friends;
  });
}