import axios from "axios";
import store from "@/store";
import { Module, VuexModule, Action, getModule } from "vuex-module-decorators";

import { User } from "@/types/user";

import { ModalsModule } from "@/store/modules/modals";
import { ProcessModule } from "@/store/modules/process";

import { clearModule } from "@/store/utils";

const BASE_URL = process.env.VUE_APP_API_URL;

clearModule("user");

@Module({ dynamic: true, name: "user", store })
export default class UserStore extends VuexModule {
  @Action
  async getUser({ id }: { id: string }) {
    const processName = "getUser";

    ProcessModule.setStatus({ name: processName, status: "loading" });

    const user: User = await axios
      .get(`${BASE_URL}/users/user`, {
        params: {
          id,
        },
      })
      .then((res) => {
        const { user } = res.data;

        ProcessModule.setStatus({ name: processName, status: "success" });

        return user;
      })
      .catch((err) => {
        const res = err?.response;
        const message = res?.data?.message || "Unable to get user.";

        ProcessModule.setError({ name: processName, error: message });
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
    const processName = "signup";

    ProcessModule.setStatus({ name: processName, status: "loading" });

    await axios
      .post(`${BASE_URL}/users/signup`, {
        firstName,
        lastName,
        email,
        password,
      })
      .then(() => {
        ModalsModule.closeModal({ name: "SignupModal" });
        ProcessModule.setStatus({ name: processName, status: "success" });
      })
      .catch((err) => {
        const res = err?.response;
        const message = res?.data?.message || "Unable to signup.";

        ProcessModule.setError({ name: processName, error: message });
      });
  }
}

export const UserModule = getModule(UserStore);
