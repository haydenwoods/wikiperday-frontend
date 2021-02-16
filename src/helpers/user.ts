import { computed } from "vue";
import { User } from "@/types/user";

export const getUserFullName = (user: User) => {
  return computed(() => {
    const firstName = user?.firstName;
    const lastName = user?.lastName;
    const fullName = `${firstName} ${lastName}`;

    return fullName;
  });
}