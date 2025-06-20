import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";

const app = createApp(App);
app.use(router);
app.use(VueQueryPlugin);
app.mount("#app");
