<template>
  <div class="order-summary">
  
    <!-- Order Summary Sections -->
    <div class="summary-section">
      <p>Subtotal</p>
      <p>{{ calculateSubtotal() }}</p>
    </div>
    <div class="summary-section" v-if="hasCashback()">
      <p>Total Discount</p>
      <p>-{{ calculateCashback() }}$</p>
      <!-- Add other discount sections as needed -->
    </div>
    <div class="summary-section">
      <p>Standard Shipping</p>
      <p>Free</p>
    </div>
    <div class="summary-section total-section">
      <p>Grand Total</p>
      <p>{{ calculateFinalPrice() }}$</p>
    </div>
  </div>
</template>

<style scoped>
.summary-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.total-section {
  font-weight: bold;
}
</style>

<script>
export default {
  props: {
    products: { type: Array, required: true }
  },
  data() {
    return {};
  },
  methods: {
    calculateSubtotal() {
      return this.products.reduce((total, product) => total + product.subtotal, 0);
    },
    hasCashback() {
      return this.products.some(product => product.tagline === "200 Cash back");
    },
    calculateCashback() {
      return this.hasCashback()
        ? this.products.filter(product => product.tagline === "200 Cash back")[0].price
        : 0;
    },
    calculateFinalPrice() {
      return this.calculateSubtotal() - this.calculateCashback();
    }
  }
};
</script>
