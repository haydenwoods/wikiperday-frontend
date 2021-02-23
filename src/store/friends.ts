import axios from "axios";

import { User } from "@/types/user";

const BASE_URL = process.env.VUE_APP_API_URL;

export const friends = {
  namespaced: true,
  actions: {
    request(context: any, { email }: {
      email: string
    }) {
      const ERROR_NAME = "friendsRequest";

      axios.post(`${BASE_URL}/friends/request`, { 
        email,
      }).then((res) => {
        const user: User = res.data?.user;
        
        context.commit("auth/updateUser", { user }, { root: true });
        context.commit("modals/closeModal", { name: "addFriend" }, { root: true });
        context.commit("errors/clrError", { name: ERROR_NAME }, { root: true });
      }).catch((error) => { 
        const res = error?.response;
        const message = res?.data?.message || "Unable send friend request.";
        
        message && context.commit("errors/setError", { 
          name: ERROR_NAME, 
          error: { 
            message,
          },
        }, { root: true });
      });
    },
    accept(context: any, { id }: {
      id: string
    }) {
      const ERROR_NAME = "friendsAccept";

      axios.put(`${BASE_URL}/friends/accept`, { 
        id,
      }).then((res) => {
        const user: User = res.data?.user;

        context.commit("auth/updateUser", { user }, { root: true });
        context.commit("errors/clrError", { name: ERROR_NAME }, { root: true });
      }).catch((error) => { 
        const res = error?.response;
        const message = res?.data?.message || "Unable to accept friend request.";
        
        message && context.commit("errors/setError", { 
          name: ERROR_NAME, 
          error: { 
            message,
          },
        }, { root: true });
      });
    },
    decline(context: any, { id }: {
      id: string
    }) {
      const ERROR_NAME = "friendsDecline";

      axios.put(`${BASE_URL}/friends/decline`, { 
        id,
      }).then((res) => {
        const user: User = res.data?.user;

        context.commit("auth/updateUser", { user }, { root: true });
        context.commit("errors/clrError", { name: ERROR_NAME }, { root: true });
      }).catch((error) => { 
        const res = error?.response;
        const message = res?.data?.message || "Unable to decline friend request.";
        
        message && context.commit("errors/setError", { 
          name: ERROR_NAME, 
          error: { 
            message,
          },
        }, { root: true });
      });
    },
    remove(context: any, { id }: {
      id: string
    }) {
      const ERROR_NAME = "friendsRemove";

      axios.delete(`${BASE_URL}/friends/remove`, { data: {
        id,
      }}).then((res) => {
        const user: User = res.data?.user;

        context.commit("auth/updateUser", { user }, { root: true });
        context.commit("errors/clrError", { name: ERROR_NAME }, { root: true });
      }).catch((error) => { 
        const res = error?.response;
        const message = res?.data?.message || "Unable to remove friend.";
        
        message && context.commit("errors/setError", { 
          name: ERROR_NAME, 
          error: { 
            message,
          },
        }, { root: true });
      });
    },
    cancel(context: any, { id }: {
      id: string
    }) {
      const ERROR_NAME = "friendsCancel";

      axios.delete(`${BASE_URL}/friends/cancel`, { data: {
        id,
      }}).then((res) => {
        const user: User = res.data?.user;

        context.commit("auth/updateUser", { user }, { root: true });
        context.commit("errors/clrError", { name: ERROR_NAME }, { root: true });
      }).catch((error) => { 
        const res = error?.response;
        const message = res?.data?.message || "Unable to cancel friend request.";
        
        message && context.commit("errors/setError", { 
          name: ERROR_NAME, 
          error: { 
            message,
          },
        }, { root: true });
      });
    },
  }
}