import axios from "axios";
import router from "@/router";
import store from "@/store";
import { Module, VuexModule, Action, Mutation, getModule } from "vuex-module-decorators";

import { ModalsModule } from "@/store/modules/modals";
import { ErrorsModule } from "@/store/modules/errors";

import { setAuth, clrAuth } from "@/helpers/auth";
import { User } from "@/types/user";

const BASE_URL = process.env.VUE_APP_API_URL;

export interface IAuth {
  user: User | null,
}

@Module({ dynamic: true, name: "Auth", store })
export default class Auth extends VuexModule implements IAuth {
  user: User | null = null;

  @Mutation
  setUser({ user }: { 
    user: User, 
  }) {
    this.user = user;
  }

  @Mutation
  updateUser({ user }: { 
    user: User, 
  }) {
    this.user = {
      ...this.user,
      ...user,
    }
  }

  @Mutation
  clearUser() {
    this.user = null;
  }

  @Action
  async signin({ email, password }: {
    email: string,
    password: string,
  }) {
    const ERROR_NAME = "signin";

    axios.post(`${BASE_URL}/auth/signin`, { 
      email, 
      password 
    }).then((res) => {
      const {
        auth,
      } = res?.data;

      setAuth(auth);
      router.push("/dashboard");
      this.session();
      ErrorsModule.clrError({ name: ERROR_NAME });
    }).catch(err => { 
      const res = err?.response;
      const message = res?.data?.message || "Unable to sign in.";
      
      ErrorsModule.setError({ name: ERROR_NAME, error: { message }});
    });
  }

  @Action    
  async signout() {
    clrAuth();
    this.clearUser();
    router.push("/");
  }

  @Action  
  async session() {
    const ERROR_NAME = "session";

    axios.get(`${BASE_URL}/auth/session`)
    .then(res => {
      const user: User = res?.data?.user;
      this.setUser({ user });
      ModalsModule.closeModal({ name: "signin" });
      ErrorsModule.clrError({ name: ERROR_NAME });
    }).catch(err => {
      const res = err?.response;
      const message = res?.data?.message || "Unable to get session.";

      clrAuth();
      router.push("/");

      ErrorsModule.setError({ name: ERROR_NAME, error: { message }});      
    }); 
  }
}

export const AuthModule = getModule(Auth);