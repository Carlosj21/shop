<template>
  <div>
    <div class="row" :key="product" v-for="product in products">
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
  data() {
    return {
      var: {},
    };
  },
  computed: {
    ...mapState([
      'products',
    ]),
  },
  methods: {
    ...mapActions([
      'getProducts',
    ]),
  },
};
</script>
