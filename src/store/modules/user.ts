import axios from "axios";
import store from "@/store";
import { Module, VuexModule, Action, getModule } from "vuex-module-decorators";

import { User } from "@/types/user";

import { ModalsModule } from "@/store/modules/modals";
import { ErrorsModule } from "@/store/modules/errors";

import { clearModule } from "@/store/utils";

const BASE_URL = process.env.VUE_APP_API_URL;

clearModule("user");

@Module({ dynamic: true, name: "user", store })
export default class UserStore extends VuexModule {
  @Action
  async getUser({ id }: { id: string }) {
    const ERROR_NAME = "getUser";

    const user: User = await axios
      .get(`${BASE_URL}/users/user`, {
        params: {
          id,
        },
      })
      .then((res) => {
        const { user } = res.data;

        ErrorsModule.clrError({ name: ERROR_NAME });

        return user;
      })
      .catch((err) => {
        const res = err?.response;
        const message = res?.data?.message || "Unable to get user.";

        ErrorsModule.setError({ name: ERROR_NAME, error: { message } });
      });

    return user;
  }

  @Action
  async signup({
    firstName,
    lastName,
    email,
    password,
  }: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    const ERROR_NAME = "signup";

    await axios
      .post(`${BASE_URL}/users/signup`, {
        firstName,
        lastName,
        email,
        password,
      })
      .then(() => {
        ModalsModule.closeModal({ name: "SignupModal" });
        ErrorsModule.clrError({ name: ERROR_NAME });
      })
      .catch((err) => {
        const res = err?.response;
        const message = res?.data?.message || "Unable to signup.";

        ErrorsModule.setError({ name: ERROR_NAME, error: { message } });
      });
  }
}

export const UserModule = getModule(UserStore);
