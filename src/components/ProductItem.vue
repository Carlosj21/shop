<template>
  <div class="five columns product-item product-box container">
      <div @mouseleave="hover = false" @mouseover="hover = true">
        <div :class="['flexContainer product-image',
        { 'product-image-blur': hover }]">
          <img :src="product.image" alt="imagen" height="200">
        </div>
        <input class="add-btn" type="button"
               v-if="hover" value="Agregar">
      </div>
    </div>
</template>

<script>
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
};
</script>
