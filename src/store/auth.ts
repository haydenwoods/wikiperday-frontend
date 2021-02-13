import axios from "axios";
import { setAuth, getAuth } from "@/helpers/auth";

const BASE_URL = process.env.VUE_APP_API_URL;

export const auth = {
  namespaced: true,
  state: {

  },
  mutations: {

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
      }).catch((err) => { 
        console.log(err);
      });
    },
    session(context: any) {
      const auth = getAuth();
      
      axios.get(`${BASE_URL}/auth/session`, { 
        headers: {
          ...(auth ? { "Authorization": auth } : {}),
        },
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      }); 
    }
  }
}