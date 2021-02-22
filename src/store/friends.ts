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

        context.commit("error/clrError", { 
          name: ERROR_NAME, 
        }, { root: true });
      }).catch((error) => { 
        const res = error?.response;
        const message = res?.data?.message || "Unable send friend request.";
        
        message && context.commit("error/setError", { 
          name: ERROR_NAME, 
          error: { 
            message,
          },
        }, { root: true });
      });
    },
    accept(context: any, { userId }: {
      userId: string
    }) {
      const ERROR_NAME = "friendsAccept";

      axios.post(`${BASE_URL}/friends/accept`, { 
        userId,
      }).then((res) => {
        const user: User = res.data?.user;

        context.commit("auth/updateUser", { user }, { root: true });

        context.commit("error/clrError", { 
          name: ERROR_NAME, 
        }, { root: true });
      }).catch((error) => { 
        const res = error?.response;
        const message = res?.data?.message || "Unable to accept friend request.";
        
        message && context.commit("error/setError", { 
          name: ERROR_NAME, 
          error: { 
            message,
          },
        }, { root: true });
      });
    },
  }
}