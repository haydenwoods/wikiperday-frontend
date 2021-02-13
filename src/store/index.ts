import Vuex from "vuex";

// Modules
import { auth } from "@/store/auth";
import { modals } from "@/store/modals";
import { user } from "@/store/user";

export default new Vuex.Store({
  modules: {
    auth,
    modals,
    user,
  },
});
