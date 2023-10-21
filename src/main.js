import "./assets/main.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faRotateRight,
  faEnvelope,
  faUser,
  faCakeCandles,
  faVenusMars,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import SyncLoader from "vue-spinner/src/SyncLoader.vue";
import VueClipboard from "vue3-clipboard";

import { VTooltip, VClosePopper, Dropdown, Tooltip, Menu } from "floating-vue";
import "floating-vue/dist/style.css";

const app = createApp(App);

library.add(
  faPhone,
  faRotateRight,
  faEnvelope,
  faUser,
  faCakeCandles,
  faVenusMars,
  faLocationDot,
);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("sync-loader", SyncLoader);

app.directive("tooltip", VTooltip);
app.directive("close-popper", VClosePopper);

app.component("VDropdown", Dropdown);
app.component("VTooltip", Tooltip);
app.component("VMenu", Menu);

app.use(VueClipboard, {
  autoSetContainer: true,
  appendToBody: true,
});

app.mount("#app");
