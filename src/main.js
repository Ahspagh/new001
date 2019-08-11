import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";

Vue.config.productionTip = false;

import axios from "axios";
import VueAxios from "vue-axios";
import "./plugins/element.js";
Vue.use(VueAxios, axios);

axios.defaults.baseURL = "http://192.168.1.36:8080/";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
Vue.config.productionTip = false;
axios.defaults.withCredentials = true;

import "./assets/iconfont/iconfont";
import "./assets/iconfont/iconfont.css";
//自定义样式
import "./css/app.less";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
