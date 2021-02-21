import { computed } from "vue";
import { useStore } from "vuex";

const AUTH_STORAGE_KEY = "auth";

export const getAuth = (): string | null => localStorage.getItem(AUTH_STORAGE_KEY);
export const setAuth = (auth: string) => localStorage.setItem(AUTH_STORAGE_KEY, auth);
export const clrAuth = () => localStorage.removeItem(AUTH_STORAGE_KEY);

export const isLoggedIn = () => {
  return computed(() => {
    const store = useStore();

    const user = store.state?.auth?.user;
    const isLoggedIn = user ? true : false;
    
    return isLoggedIn;
  });
}