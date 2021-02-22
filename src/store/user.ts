import axios from "axios";

const BASE_URL = process.env.VUE_APP_API_URL;

export const user = {
  namespaced: true,
  actions: {
    signup(context: any, { firstName, lastName, email, password }: {
      firstName: string,
      lastName: string,
      email: string,
      password: string
    }) {
      axios.post(`${BASE_URL}/users/signup`, {
        firstName,
        lastName,
        email,
        password,
      }).then((res) => {
        context.commit("modals/closeModal", "signup", { root: true });
        context.commit("error/clrError", { name: "signup" }, { root: true });
      }).catch((error) => { 
        const res = error?.response;
        const message = res?.data?.message;
        
        message && context.commit("error/setError", { 
          name: "signup", 
          error: { 
            message,
          },
        }, { root: true });
      });
    },
  }
}