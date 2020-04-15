<template>
  <div class="product-item product-box container">
    <div class="row">
      <div class="six columns" @mouseleave="hover = false" @mouseover="hover = true">
        <div :class="['flexContainer product-image',
        { 'product-image-blur': hover }]">
          <img :src="product.image" alt="imagen" height="200">
        </div>
        <input class="add-btn" type="button"
               v-if="hover" value="Agregar">
      </div>
      <div class="six columns flexContainer">
        <div class="row">
          <div class="eight columns product-title">
            {{ product.name }}
          </div>
        </div>
        <div class="row">
          <div class="product-description">
            {{ product.description }}
          </div>
        </div>
        <div class="row">
          <div class="six columns">
            <b>Contenido: </b>
          </div>
          <div class="six columns">
            {{ product.contentWeight }}
          </div>
        </div>
        <div class="row">
          <div class="six columns product-price">
            $ {{ product.price }}
          </div>
        </div>
      </div>
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
