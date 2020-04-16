<template>
  <div class="container">
    <div v-if="inspectorProduct">
      <div class="row">
        <div class="product-cart-count white-text" v-if="cartCount > 0">{{cartCount}}</div>
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
          <button v-if="cartCount > 0"
                  @click="manageProductToCart({product: inspectorProduct, action: 'remove'})"
                  class="cart-action-button">
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
    </div>
    <div v-else>
      Please choose a product on the left.
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'ProductInspector',
  methods: {
    ...mapActions([
      'manageProductToCart',
    ]),
  },
  computed: {
    ...mapGetters([
      'getInspectorProduct',
    ]),
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
