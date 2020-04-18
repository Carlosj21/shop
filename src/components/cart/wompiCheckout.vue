<template>
    <div>
      <button class="wompi-button u-pull-left"
              @click="processCheckout(cartTotal * 100)">
        Paga con wompi
      </button>
    </div>
</template>

<script>
export default {
  name: 'wompiCheckout',
  props: {
    cartTotal: {
      type: Number,
      default: () => 0,
    },
  },
  methods: {
    processCheckout(amount) {
      // se deshabilita eslint para que no notifique error por objeto desconocido
      // eslint-disable-next-line no-undef
      this.checkout = new WidgetCheckout({
        currency: 'COP',
        amountInCents: amount,
        reference: 'AD002901221',
        publicKey: 'pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf',
        redirectUrl: 'https://transaction-redirect.wompi.co/check', // Opcional
      });
      this.checkout.open((result) => {
        const { transaction } = result;
        console.log('Transaction ID: ', transaction.id);
        console.log('Transaction object: ', transaction);
      });
    },
  },
};
</script>
