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
        <span class="total-title">Total:</span>
        <span class="total-ammount">${{cartTotal}}</span>
      </div>
    </div>
</template>

<script>
import CartProductItem from '@/components/products/CartProductItem.vue';

export default {
  name: 'CartBrief',
  components: {
    CartProductItem,
  },
  data() {
    return {
      key: 'value',
    };
  },
  props: {
    cartProducts: {
      type: Object,
      default: () => {},
    },
    cartTotal: {
      type: Number,
      default: () => 0,
    },
  },
};
</script>
