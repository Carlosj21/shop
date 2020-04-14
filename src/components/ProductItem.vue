<template>
  <div class="product-item box">
    <div class="row">

    </div>
    <img :src="product.image" alt="imagen" height="200">
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
    },
  },
};
</script>
