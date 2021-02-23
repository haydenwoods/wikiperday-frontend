import axios from "axios";
import router from "@/router";
import { setAuth, clrAuth } from "@/helpers/auth";
import { User } from "@/types/user";

const BASE_URL = process.env.VUE_APP_API_URL;

type State = {
  user: User | null
}

export const auth: {
  state: State,
  [key: string]: any
} = {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    setUser(state: State, { user }: { 
      user: User 
    }) {
      state.user = user;
    },
    updateUser(state: State, { user }: { 
      user: User 
    }) {
      state.user = {
        ...state.user,
        ...user,
      }
    },  
    clearUser(state: State) {
      state.user = null;
    },
  },
  actions: {
    signin(context: any, { email, password }: {
      email: string,
      password: string
    }) {
      axios.post(`${BASE_URL}/auth/signin`, { 
        email, 
        password 
      }).then((res) => {
        const {
          auth,
        } = res?.data;

        setAuth(auth);
        context.dispatch("session");
        context.commit("errors/clrError", { 
          name: "signin" 
        }, { root: true });
      }).catch((error) => { 
        const res = error?.response;
        const message = res?.data?.message;
        
        message && context.commit("errors/setError", { 
          name: "signin", 
          error: { 
            message,
          },
        }, { root: true });
      });
    },
    signout(context: any) {
      clrAuth();
      context.commit("clearUser");
      router.push("/");
    },
    session(context: any) {
      axios.get(`${BASE_URL}/auth/session`)
      .then((res) => {
        const user: User = res?.data?.user;
        context.commit("setUser", { user });
        context.commit("modals/closeModal", { name: "signin" }, { root: true });
      }).catch((err) => {
        clrAuth();
        router.push("/");
        console.error("session error > ", err);
      }); 
    }
  }
}