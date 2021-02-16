import Vuex from "vuex";

// Modules
import { auth } from "@/store/auth";
import { modals } from "@/store/modals";
import { user } from "@/store/user";
import { error } from "@/store/error";

export default new Vuex.Store({
  modules: {
    auth,
    modals,
    user,
    error
  },
});