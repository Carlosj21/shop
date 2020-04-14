import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [{
      name: 'Arroz',
      price: '2000',
      contentWeight: '500gr',
      description: 'Arroz blanco parvolizado',
      image: './assets/img/arrozDiana.jpg',
    }, {
      name: 'Arroz',
      price: '2000',
      contentWeight: '500gr',
      description: 'Arroz blanco parvolizado',
      image: './assets/img/arrozDiana.jpg',
    }, {
      name: 'Arroz',
      price: '2000',
      contentWeight: '500gr',
      description: 'Arroz blanco parvolizado',
      image: './assets/img/arrozDiana.jpg',
    }],
    cartProducts: [],
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_CART_PRODUCTS(state, products) {
      state.cartProducts = products;
    },
  },
  actions: {
    setCartProducts({ dispatch }, products = []) {
      localStorage.setItem('products', JSON.stringify(products));
      dispatch('SET_PRODUCTS', products);
    },
  },
  modules: {},
});
