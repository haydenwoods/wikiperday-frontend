import axios from "axios";
import store from "@/store";
import { Module, VuexModule, Action, getModule } from "vuex-module-decorators";

import { ModalsModule } from "@/store/modules/modals";
import { ErrorsModule } from "@/store/modules/errors";

const BASE_URL = process.env.VUE_APP_API_URL;

// export interface IUser {}

@Module({ dynamic: true, name: "User", store })
export default class User extends VuexModule /*implements IUser*/ {
  @Action
  signup({ firstName, lastName, email, password }: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  }) {
    axios.post(`${BASE_URL}/users/signup`, {
      firstName,
      lastName,
      email,
      password,
    }).then(() => {
      ModalsModule.closeModal({ name: "signup" });
      ErrorsModule.clrError({ name: "signup" });
    }).catch((err) => { 
      const res = err?.response;
      const message = res?.data?.message || "Unable to signup.";
      
      ErrorsModule.setError({ name: "signup", error: { message }});
    });
  }
}

export const UserModule = getModule(User);