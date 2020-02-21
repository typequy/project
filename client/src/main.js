import Vue from "vue";
import VueRouter from 'vue-router';
import router from "./router";
import App from "./App.vue";
import instance from './apis/axios';
import { Swal, Toast } from './apis/sweetAlert';

Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.prototype.$http = instance;
Vue.prototype.$swal = Swal;
Vue.prototype.$toast = Toast;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
