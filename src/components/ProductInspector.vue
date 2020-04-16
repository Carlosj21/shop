<template>
  <div class="container">
    <div v-if="inspectorItem">
      {{ inspectorItem || JSON }}
      <div class="inspector-product-image">

      </div>
    </div>
    <div v-else>
      Please choose a product on the left.
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProductInspector',
  computed: {
    ...mapGetters([
      'getInspectorProduct',
    ]),
    inspectorItem: {
      get() {
        return this.getInspectorProduct ? this.getInspectorProduct : null;
      },
    },
  },
};
</script>
