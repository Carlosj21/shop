import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Arroz Diana 500gr',
        price: '1500',
        contentWeight: '500gr',
        description: 'Arroz blanco parvolizado de 500gr',
        image: './assets/img/arrozDiana.jpg',
      }, {
        id: 2,
        name: 'Chocolate CriCri',
        price: '3000',
        contentWeight: '1000gr',
        description: 'Barra de chocolate con leche y trocitos de arroz inflado',
        image: './assets/img/cricri.jpg',
      }, {
        id: 3,
        name: 'Pirulin',
        price: '25000',
        contentWeight: '5000gr',
        description: 'Barquillos de galleta rellenos con crema de chocolate y trocitos de avellanas',
        image: './assets/img/pirulin.jpg',
      }, {
        id: 4,
        name: 'Samba',
        price: '4000',
        contentWeight: '5000gr',
        description: 'Galleta rellena con crema de fresa cubierta de chocolate',
        image: './assets/img/samba.jpg',
      }, {
        id: 5,
        name: 'Chocolate Savoy',
        price: '3000',
        contentWeight: '5000gr',
        description: 'Barra de chocolate con leche',
        image: './assets/img/savoy.jpg',
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
    manageProductToCart({ dispatch, state }, { product, action }) {
      let tempCartProducts = { ...state.cartProducts };
      switch (action) {
        case 'add':
          if (tempCartProducts[product.id]) {
            tempCartProducts[product.id].count += 1;
          } else {
            tempCartProducts[product.id] = product;
            tempCartProducts[product.id].count = 1;
          }
          break;
        case 'remove':
          if (tempCartProducts[product.id].count === 1) {
            tempCartProducts = tempCartProducts.filter((prod) => prod.id !== product.id);
          } else {
            tempCartProducts[product.id].count -= 1;
          }
          break;
        default:
          break;
      }
      dispatch('setCartProducts', tempCartProducts);
    },
    setCartProducts({ commit }, products = []) {
      localStorage.setItem('products', JSON.stringify(products));
      commit('SET_CART_PRODUCTS', products);
    },
    setInspectorProduct({ commit }, product) {
      commit('SET_INSPECTOR_PRODUCT', product);
    },
  },
  getters: {
    getInspectorProduct(state) {
      return state.inspectorProduct >= 0 ? state.products[state.inspectorProduct] : null;
    },
    getCartTotal(state) {
      let total = 0;
      if (state.cartProducts) {
        const prodsKey = Object.keys(state.cartProducts);
        prodsKey.forEach((key) => {
          for (let i = 0; i < state.cartProducts[key].count; i += 1) {
            total += parseInt(state.cartProducts[key].price, 10);
          }
        });
      }
      return total;
    },
  },
});
