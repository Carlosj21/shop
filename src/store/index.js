import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        name: 'Arroz Diana 500gr',
        price: '1500',
        contentWeight: '500gr',
        description: 'Arroz blanco parvolizado',
        image: './assets/img/arrozDiana.jpg',
      }, {
        name: 'Arroz Diana 1Kg',
        price: '3000',
        contentWeight: '1000gr',
        description: 'Arroz blanco parvolizado',
        image: './assets/img/arrozDiana.jpg',
      }, {
        name: 'Arroz Diana 5Kg',
        price: '15000',
        contentWeight: '5000gr',
        description: 'Arroz blanco parvolizado',
        image: './assets/img/arrozDiana.jpg',
      },
    ],
    cartProducts: [],
    inspectorProduct: null,
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_CART_PRODUCTS(state, products) {
      state.cartProducts = products;
    },
    SET_INSPECTOR_PRODUCT(state, product) {
      state.inspectorProduct = product;
    },
  },
  actions: {
    setCartProducts({ commit }, products = []) {
      localStorage.setItem('products', JSON.stringify(products));
      commit('SET_PRODUCTS', products);
    },
    setInspectorProduct({ commit }, product) {
      commit('SET_INSPECTOR_PRODUCT', product);
    },
  },
  getters: {
    getInspectorProduct(state) {
      return state.inspectorProduct >= 0 ? state.products[state.inspectorProduct] : null;
    },
  },
});
