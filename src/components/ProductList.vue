<template>
  <div class="row">
    <div :key="i" v-for="(product, i) in products" @click="setInspectorProduct(i)">
      <product-item :product="product"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ProductItem from '@/components/ProductItem.vue';

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
