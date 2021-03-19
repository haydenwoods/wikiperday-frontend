import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

import wdButton from "@/components/atoms/wdButton.vue";
import wdContainer from "@/components/atoms/wdContainer.vue";
import wdForm from "@/components/atoms/wdForm.vue";
import wdIcon from "@/components/atoms/wdIcon/wdIcon.vue";
import wdImage from "@/components/atoms/wdImage.vue";
import wdInput from "@/components/atoms/wdInput.vue";
import wdMenu from "@/components/atoms/wdMenu.vue";
import wdMenuItem from "@/components/atoms/wdMenuItem.vue";
import wdModal from "@/components/atoms/wdModal.vue";
import wdSpacer from "@/components/atoms/wdSpacer.vue";
import wdText from "@/components/atoms/wdText.vue";
import wdTitle from "@/components/atoms/wdTitle.vue";

import { setAxiosAuth } from "@/helpers/auth";
setAxiosAuth();

createApp(App)
  .use(store)
  .use(router)
  .component("wd-button", wdButton)
  .component("wd-container", wdContainer)
  .component("wd-form", wdForm)
  .component("wd-icon", wdIcon)
  .component("wd-image", wdImage)
  .component("wd-input", wdInput)
  .component("wd-menu", wdMenu)
  .component("wd-menu-item", wdMenuItem)
  .component("wd-modal", wdModal)
  .component("wd-spacer", wdSpacer)
  .component("wd-text", wdText)
  .component("wd-title", wdTitle)
  .mount("#app");
