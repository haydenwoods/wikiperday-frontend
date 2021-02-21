import axios from "axios";
import { setAuth, getAuth, clrAuth } from "@/helpers/auth";
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
    setUser(state: State, user: User) {
      state.user = user;
    },
    clrUser(state: State) {
      state.user = null;
    },
  },
  actions: {
    signin(context: any, { email, password }: {
      email: string,
      password: string
    }) {
      axios.post(`${BASE_URL}/auth/signin`, { email, password }).then((res) => {
        const {
          auth,
        } = res?.data;

        setAuth(auth);
        context.dispatch("session");
        context.commit("error/clrError", { name: "signin" }, { root: true });
      }).catch((error) => { 
        const res = error?.response;
        const message = res?.data?.message;
        
        message && context.commit("error/setError", { 
          name: "signin", 
          error: { 
            message,
          },
        }, { root: true });
      });
    },
    signout(context: any) {
      clrAuth();
      context.commit("clrUser");
    },
    session(context: any) {
      const auth = getAuth();
      
      axios.get(`${BASE_URL}/auth/session`, { 
        headers: {
          ...(auth ? { "Authorization": auth } : {}),
        },
      }).then((res) => {
        const user = res?.data?.user;
        context.commit("setUser", user);
        context.commit("modals/closeModal", "signin", { root: true });
      }).catch((err) => {
        console.error("session error > ", err);
        clrAuth();
      }); 
    }
  }
}