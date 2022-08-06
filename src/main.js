import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "animate.css";

const app = createApp(App);
app.use(router).mount("#app");
