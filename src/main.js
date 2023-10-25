import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";

import BaseButton from "./components/ui/BaseButton.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";
import GearSpinner from "./components/ui/BaseSpinner2.vue";

const app = createApp(App);
app.component("base-button", BaseButton);
app.component("base-spinner", BaseSpinner);
app.component("gear-spinner", GearSpinner);

app.use(router);

app.mount("#app");
