import Vuex from "vuex";

// Modules
import { IAuth } from "@/store/modules/auth";
import { IModals } from "@/store/modules/modals";
import { IErrors } from "@/store/modules/errors";
// import { IUser } from "@/store/modules/user";
// import { IFriends } from "@/store/modules/friends";

export interface IRootState {
  auth: IAuth;
  modals: IModals;
  errors: IErrors;
  // user: IUser,
  // friends: IFriends,
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({});
