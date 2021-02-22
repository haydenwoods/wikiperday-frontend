import axios from "axios";
import { computed } from "vue";
import { useStore } from "vuex";

const AUTH_STORAGE_KEY = "auth";

export const getAuth = (): string | null => localStorage.getItem(AUTH_STORAGE_KEY);

export const setAxiosAuth = (auth?: string) => { 
  axios.defaults.headers.common["Authorization"] = auth || getAuth();
}

export const setAuth = (auth: string) => { setAxiosAuth(auth); localStorage.setItem(AUTH_STORAGE_KEY, auth) }
export const clrAuth = () => localStorage.removeItem(AUTH_STORAGE_KEY);

export const getIsLoggedIn = () => {
  return computed(() => {
    const store = useStore();

    const user = store?.state?.auth?.user;
    const isLoggedIn = user ? true : false;
    
    return isLoggedIn;
  });
}