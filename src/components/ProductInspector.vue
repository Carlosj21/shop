<template>
  <div class="container">
    {{ inspectorItem || JSON }}
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
        return this.getInspectorProduct ? this.getInspectorProduct : {};
      },
    },
  },
};
</script>
