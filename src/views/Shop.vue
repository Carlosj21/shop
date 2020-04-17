<template>
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
</template>

<script>
import ProductList from '@/components/main/ProductList.vue';
import ProductInspector from '@/components/main/ProductInspector.vue';

export default {
  name: 'Home',
  components: {
    ProductList,
    ProductInspector,
  },
};
</script>
