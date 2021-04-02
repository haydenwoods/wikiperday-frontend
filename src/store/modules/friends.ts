import axios from "axios";
import store from "@/store";
import { Module, VuexModule, Action, getModule } from "vuex-module-decorators";

import { User } from "@/types/user";

import { ModalsModule } from "@/store/modules/modals";
import { ProcessModule } from "@/store/modules/process";
import { AuthModule } from "@/store/modules/auth";

import { clearModule } from "@/store/utils";

const BASE_URL = process.env.VUE_APP_API_URL;

clearModule("friends");

@Module({ dynamic: true, name: "friends", store })
export default class Friends extends VuexModule {
  @Action
  async request({ email }: { email: string }) {
    const processName = "friendsRequest";

    ProcessModule.setStatus({ name: processName, status: "loading" });

    axios
      .post(`${BASE_URL}/friends/request`, {
        email,
      })
      .then((res) => {
        const user: User = res.data?.user;

        AuthModule.updateUser({ user });
        ModalsModule.closeModal({ name: "AddFriendModal" });
        ProcessModule.setStatus({ name: processName, status: "success" });
      })
      .catch((error) => {
        const res = error?.response;
        const message = res?.data?.message || "Unable send friend request.";

        ProcessModule.setError({ name: processName, error: message });
      });
  }

  @Action
  async accept({ id }: { id: string }) {
    const processName = "friendsAccept";

    ProcessModule.setStatus({ name: processName, status: "loading" });

    axios
      .put(`${BASE_URL}/friends/accept`, {
        id,
      })
      .then((res) => {
        const user: User = res.data?.user;

        AuthModule.updateUser({ user });
        ProcessModule.setStatus({ name: processName, status: "success" });
      })
      .catch((error) => {
        const res = error?.response;
        const message =
          res?.data?.message || "Unable to accept friend request.";

        ProcessModule.setError({ name: processName, error: message });
      });
  }

  @Action
  async decline({ id }: { id: string }) {
    const processName = "friendsDecline";

    ProcessModule.setStatus({ name: processName, status: "loading" });

    axios
      .put(`${BASE_URL}/friends/decline`, {
        id,
      })
      .then((res) => {
        const user: User = res.data?.user;

        AuthModule.updateUser({ user });
        ProcessModule.setStatus({ name: processName, status: "success" });
      })
      .catch((error) => {
        const res = error?.response;
        const message =
          res?.data?.message || "Unable to decline friend request.";

        ProcessModule.setError({ name: processName, error: message });
      });
  }

  @Action
  async remove({ id }: { id: string }) {
    const processName = "friendsRemove";

    ProcessModule.setStatus({ name: processName, status: "loading" });

    axios
      .delete(`${BASE_URL}/friends/remove`, {
        data: {
          id,
        },
      })
      .then((res) => {
        const user: User = res.data?.user;

        AuthModule.updateUser({ user });
        ProcessModule.setStatus({ name: processName, status: "success" });
      })
      .catch((error) => {
        const res = error?.response;
        const message = res?.data?.message || "Unable to remove friend.";

        ProcessModule.setError({ name: processName, error: message });
      });
  }

  @Action
  async cancel({ id }: { id: string }) {
    const processName = "friendsCancel";

    ProcessModule.setStatus({ name: processName, status: "loading" });

    axios
      .delete(`${BASE_URL}/friends/cancel`, {
        data: {
          id,
        },
      })
      .then((res) => {
        const user: User = res.data?.user;

        AuthModule.updateUser({ user });
        ProcessModule.setStatus({ name: processName, status: "success" });
      })
      .catch((error) => {
        const res = error?.response;
        const message =
          res?.data?.message || "Unable to cancel friend request.";

        ProcessModule.setError({ name: processName, error: message });
      });
  }
}

export const FriendsModule = getModule(Friends);
