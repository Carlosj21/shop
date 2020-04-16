<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="six columns store-header">
          <div class="u-pull-left">
            <img alt="logo" src="assets/img/icon.png" width="50">
            <div class="store-title">
              <span>Tienda</span>
            </div>
          </div>
        </div>
        <div class="six columns store-header">
          <div class="u-pull-right">
            <button>
              <font-awesome-icon icon="shopping-cart"/>
              {{ cartTotal }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="six columns">
          <product-list/>
        </div>
        <div class="six columns">
          <product-inspector/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import ProductInspector from '@/components/ProductInspector.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters({ cartTotal: 'getCartTotal' }),
  },
  components: {
    ProductList,
    ProductInspector,
  },
};
</script>
