// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App';
import router from './router';
import MainLayout from './components/main/MainLayout';
import WelcomeLayout from './components/WelcomeLayout';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueSweetalert2);

Vue.component('main-layout', MainLayout);
Vue.component('welcome-layout', WelcomeLayout);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
});
