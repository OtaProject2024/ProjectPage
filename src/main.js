import {createApp} from "vue";
import App from "./App.vue";
import router from "./router.js";
import "./style.css";
import VueGtag from "vue-gtag";

createApp(App)
    .use(router)
    .use(VueGtag, {config: {id: "G-WN7JS0WP86",},}, router)
    .mount("#app");
