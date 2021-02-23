import Vuex from "vuex";

// Modules
import { auth } from "@/store/auth";
import { modals } from "@/store/modals";
import { user } from "@/store/user";
import { errors } from "@/store/errors";
import { friends } from "@/store/friends";

export default new Vuex.Store({
  modules: {
    auth,
    modals,
    user,
    errors,
    friends,
  },
});
