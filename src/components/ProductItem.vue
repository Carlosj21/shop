<template>
  <div>
    <div class="five columns product-item product-box container">
      <div v-if="cartCount > 0" class="product-cart-count">{{cartCount}}</div>
      <div @mouseleave="hover = false" @mouseover="hover = true">
        <div :class="['flexContainer product-image',
        { 'product-image-blur': hover }]">
          <img :src="product.image" alt="imagen" height="200">
        </div>
        <input @click="manageProductToCart({ product, action: 'add' })" class="add-btn"
               type="button" v-if="hover" value="Agregar">
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
