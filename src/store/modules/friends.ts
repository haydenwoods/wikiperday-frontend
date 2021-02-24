import axios from "axios";
import store from "@/store";
import { Module, VuexModule, Action, getModule } from "vuex-module-decorators";

import { ModalsModule } from "@/store/modules/modals";
import { ErrorsModule } from "@/store/modules/errors";
import { AuthModule } from "@/store/modules/auth";

import { User } from "@/types/user";
const BASE_URL = process.env.VUE_APP_API_URL;

// export interface IFriends {}

@Module({ dynamic: true, name: "Friends", store })
export default class Friends extends VuexModule /*implements IFriends*/ {
  @Action
  async request({ email }: {
    email: string,
  }) {
    const ERROR_NAME = "friendsRequest";

    axios.post(`${BASE_URL}/friends/request`, { 
      email,
    }).then(res => {
      const user: User = res.data?.user;
      
      AuthModule.updateUser({ user });
      ModalsModule.closeModal({ name: "addFriend" });
      ErrorsModule.clrError({ name: ERROR_NAME });
    }).catch(error => { 
      const res = error?.response;
      const message = res?.data?.message || "Unable send friend request.";

      ErrorsModule.setError({ name: ERROR_NAME, error: { message }});
    });
  }

  @Action
  async accept({ id }: {
    id: string,
  }) {
    const ERROR_NAME = "friendsAccept";

    axios.put(`${BASE_URL}/friends/accept`, { 
      id,
    }).then((res) => {
      const user: User = res.data?.user;

      AuthModule.updateUser({ user });
      ErrorsModule.clrError({ name: ERROR_NAME });
    }).catch((error) => { 
      const res = error?.response;
      const message = res?.data?.message || "Unable to accept friend request.";
      
      ErrorsModule.setError({ name: ERROR_NAME, error: { message }});
    });
  }

  @Action
  async decline({ id }: {
    id: string,
  }) {
    const ERROR_NAME = "friendsDecline";

    axios.put(`${BASE_URL}/friends/decline`, { 
      id,
    }).then((res) => {
      const user: User = res.data?.user;

      AuthModule.updateUser({ user });
      ErrorsModule.clrError({ name: ERROR_NAME });
    }).catch((error) => { 
      const res = error?.response;
      const message = res?.data?.message || "Unable to decline friend request.";
      
      ErrorsModule.setError({ name: ERROR_NAME, error: { message }});
    });
  }

  @Action
  async remove({ id }: {
    id: string,
  }) {
    const ERROR_NAME = "friendsRemove";

    axios.delete(`${BASE_URL}/friends/remove`, { data: {
      id,
    }}).then((res) => {
      const user: User = res.data?.user;

      AuthModule.updateUser({ user });
      ErrorsModule.clrError({ name: ERROR_NAME });
    }).catch((error) => { 
      const res = error?.response;
      const message = res?.data?.message || "Unable to remove friend.";
      
      ErrorsModule.setError({ name: ERROR_NAME, error: { message }});
    });
  }

  @Action
  async cancel({ id }: {
    id: string,
  }) {
    const ERROR_NAME = "friendsCancel";

    axios.delete(`${BASE_URL}/friends/cancel`, { data: {
      id,
    }}).then((res) => {
      const user: User = res.data?.user;

      AuthModule.updateUser({ user });
      ErrorsModule.clrError({ name: ERROR_NAME });
    }).catch((error) => { 
      const res = error?.response;
      const message = res?.data?.message || "Unable to cancel friend request.";
      
      ErrorsModule.setError({ name: ERROR_NAME, error: { message }});
    });
  }
}

export const FriendsModule = getModule(Friends);