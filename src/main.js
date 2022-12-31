import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@vuepic/vue-datepicker/dist/main.css";

import "./index.css";

const pinia = createPinia();
createApp(App).use(router).use(pinia).mount("#app");
