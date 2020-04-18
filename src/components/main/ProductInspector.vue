<template>
  <div>
    <div class="row">
      <div class="store-header">
        <div class="u-pull-right">
          <button @click="toggleCart()" class="cart-button white-text" v-if="!showCartItems">
            <font-awesome-icon icon="shopping-cart"/>
            {{ cartTotal }}
          </button>
          <button @click="toggleCart()" class="cart-button-secondary" v-else>
            <font-awesome-icon icon="shopping-cart"/>
            {{ cartTotal }}
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-if="showCartItems">
        <div class="row" v-if="cartTotal > 0">
          <div :key="i" v-for="(product, i) in cartProducts">
            <cart-product-item :product="product"></cart-product-item>
          </div>
        </div>
        <div class="row" v-else>
          Your cart is empty :(
        </div>
        <div class="row u-pull-right cart-total">
          <span class="total-title">Total:</span>
          <span class="total-ammount">${{cartTotal}}</span>
        </div>
      </div>
      <div v-else>
        <div v-if="inspectorProduct">
          <div class="row">
            <div class="product-cart-count white-text"
                 v-if="cartCount > 0">{{cartCount}}
            </div>
            <div @click="manageProductToCart({product: inspectorProduct, action: 'clearProd'})"
                 class="product-cart-clear white-text u-pull-right" style="right: 0;"
                 v-if="cartCount > 0">
              <font-awesome-icon icon="trash"/>
            </div>
            <div class="inspector-product-image center-content">
              <img :src="inspectorProduct.image" alt="imagen" height="200">
            </div>
          </div>
          <div class="row">
            <div class="inspector-product-cart-actions u-pull-left">
              <div class="inspector-product-name">
                {{inspectorProduct.name}}
              </div>
              <div class="inspector-product-price">
                $ {{inspectorProduct.price}}
              </div>
            </div>
            <div class="inspector-product-cart-actions u-pull-right">
              <button @click="manageProductToCart({product: inspectorProduct, action: 'remove'})"
                      class="cart-action-button"
                      v-if="cartCount > 0">
                <span v-if="cartCount > 1">-</span>
                <span v-else>
              <font-awesome-icon icon="trash"/>
            </span>
              </button>
              <button @click="manageProductToCart({product: inspectorProduct, action: 'add'})"
                      class="cart-action-button">+
              </button>
            </div>
          </div>
          <div class="inspector-separator"></div>
          <div class="row inspector-product-description">
            {{inspectorProduct.description}}
          </div>
          <div class="inspector-separator"></div>
        </div>
        <div v-else>
          <div class="row">
            Please choose a product on the left.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import CartProductItem from '@/components/products/CartProductItem.vue';

export default {
  name: 'ProductInspector',
  components: {
    CartProductItem,
  },
  data() {
    return {
      showCartItems: false,
    };
  },
  methods: {
    ...mapActions([
      'manageProductToCart',
    ]),
    toggleCart() {
      this.showCartItems = !this.showCartItems;
    },
  },
  computed: {
    ...mapGetters({
      cartTotal: 'getCartTotal',
      getInspectorProduct: 'getInspectorProduct',
    }),
    ...mapState([
      'cartProducts',
    ]),
    cartCount: {
      get() {
        return this.cartProducts[this.inspectorProduct.id]
          ? this.cartProducts[this.inspectorProduct.id].count : 0;
      },
    },
    inspectorProduct: {
      get() {
        return this.getInspectorProduct ? this.getInspectorProduct : null;
      },
    },
  },
};
</script>
