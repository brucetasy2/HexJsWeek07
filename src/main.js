import Vue from 'vue';
import axios from 'axios'; // 01
import Loading from 'vue-loading-overlay'; // 02A Loading 套件
import 'vue-loading-overlay/dist/vue-loading.css'; // 02B Loading 套件
import $ from 'jquery'; // 03
import './bus'; // 04 bus
import App from './App.vue';
import router from './router';

Vue.prototype.$http = axios; // 01
Vue.component('Loading', Loading); // 02
Vue.use(Loading); // 02
Vue.prototype.$jq = $; // 03
window.$ = $; // 03

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
