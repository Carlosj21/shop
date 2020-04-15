<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="six columns store-header">
          <div class="u-pull-left store-icon">
            <img src="assets/img/icon.png" alt="logo" width="50">
            <div class="store-title">
              <span>Tienda</span>
            </div>
          </div>
        </div>
        <div class="six columns store-header">
          <div class="u-pull-right">
            <font-awesome-icon icon="shopping-cart" />
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

export default {
  name: 'Home',
  components: {
    ProductList,
    ProductInspector,
  },
};
</script>
