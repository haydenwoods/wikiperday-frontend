import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io-extended";

const socket = new SocketIO(process.env.VUE_APP_API_URL);

createApp(App)
  .use(store)
  .use(VueSocketIO, socket, { store })
  .use(router)
  .mount("#app")