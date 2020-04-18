<template>
  <div>
    <div class="row" v-if="cartTotal > 0">
      <div :key="i" v-for="(product, i) in cartProducts">
        <cart-product-item :product="product"></cart-product-item>
      </div>
    </div>
    <div class="row" v-else>
      Your cart is empty :(
    </div>
    <div class="row u-pull-right cart-total">
      <div class="u-pull-left">
        <wompi-checkout :cartTotal="cartTotal"></wompi-checkout>
      </div>
      <div class="u-pull-right">
        <span class="total-title">Total:</span>
        <span class="total-ammount">${{cartTotal}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import CartProductItem from '@/components/products/CartProductItem.vue';
import WompiCheckout from '@/components/cart/wompiCheckout.vue';

export default {
  name: 'CartBrief',
  components: {
    WompiCheckout,
    CartProductItem,
  },
  data() {
    return {
      key: 'value',
      checkout: null,
    };
  },
  props: {
    cartProducts: {
      type: Object,
      default: () => {
      },
    },
    cartTotal: {
      type: Number,
      default: () => 0,
    },
  },
};
</script>
