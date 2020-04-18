import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faTrash, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

library.add([faShoppingCart, faTrash, faShoppingBag]);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render(h) {
    return h(App);
  },
}).$mount('#app');
