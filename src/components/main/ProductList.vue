<template>
  <div>
    <div class="row">
      <div class="store-header">
        <div class="row">
          <div class="store-icon">
            <font-awesome-icon icon="shopping-bag"/>
          </div>
        </div>
        <div class="row">
          <div class="store-title">
            <span>Tienda</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div :key="i" @click="setInspectorProduct(i)" v-for="(product, i) in products">
        <product-item :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ProductItem from '@/components/products/ProductItem.vue';

export default {
  name: 'ProductList',
  components: {
    ProductItem,
  },
  computed: {
    ...mapState([
      'products',
    ]),
  },
  methods: {
    ...mapActions([
      'getProducts',
      'setInspectorProduct',
    ]),
  },
};
</script>
