<template>
  <div class="cart-product-item">
    <div class="row">
      <div class="four columns">
        <div class="product-cart-count white-text">{{cartCount}}</div>
        <img :src="product.image" alt="" style="max-width: 100%">
      </div>
      <div class="eight columns">
        <div class="">{{product.name}}</div>
        <div @click="manageProductToCart({product, action: 'clearProd'})"
             class="product-cart-clear white-text u-pull-right" style="right: 0;">
          <font-awesome-icon icon="trash"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'ProductItem',
  data() {
    return {
      hover: false,
    };
  },
  props: {
    product: {
      type: Object,
    },
  },
  computed: {
    ...mapState([
      'cartProducts',
    ]),
    cartCount: {
      get() {
        return this.cartProducts[this.product.id] ? this.cartProducts[this.product.id].count : 0;
      },
    },
  },
  methods: {
    ...mapActions([
      'manageProductToCart',
    ]),
  },
};
</script>
