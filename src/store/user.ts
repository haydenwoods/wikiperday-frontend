import axios from "axios";

const BASE_URL = process.env.VUE_APP_API_URL;

export const user = {
  namespaced: true,
  state: {

  },
  mutations: {

  },
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
        console.log(res);
      }).catch((err) => { 
        console.log(err);
      });
    },
  }
}