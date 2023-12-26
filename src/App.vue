<template>
  <div>
    <Header />
    
    <!-- Product List Card -->
    <ProgressBar class="progress-bar"/>
    <pageHeadline class="progress-bar"/>
    <b-card class="mb-3 mx-5 mt-4">
      <div class="row">
        <div class="col-12">
          <ProductList :products="productData" @update-products="updateProducts" />
        </div>
      </div>
      <!-- Delivery Availability and Order Summary Cards -->
      <div class="row mt-4">
        <!-- Delivery Availability Card (4 columns on large screens, 12 columns on mobile) -->
        <div class="col-lg-1 col-md-3 col-12 mb-3">
        </div>
        <div class="col-lg-4 col-md-4 col-12 mb-3">
          <p>Delivary Availability</p>
          <DeliveryAvailability />
        </div>
        <div class="col-lg-2 col-md-3 col-12 mb-3">
        </div>
       
        <div class="col-lg-4 col-md-4 col-12 mb-3">
          <p>Order Summary</p>
          <OrderSummary :products="productData" />
        </div>
        <div class="col-lg-1 col-md-3 col-12 mb-3">
        </div>
      </div>
    </b-card>
  </div>
</template>
<script>
import Header from './components/Page-header.vue'
import ProductList from './components/ProductList.vue'
import OrderSummary from "./components/OrderSummary.vue"
import DeliveryAvailability from './components/DeliveryAvailability.vue'
import pageHeadline from './components/pageHeadline.vue'
import ProgressBar from './components/ProgressBar.vue'
import { BCard } from 'bootstrap-vue'
export default {
  name: 'App',
  components: {
    Header,
    ProductList,
    OrderSummary,
    DeliveryAvailability,
    BCard, // Import BCard component from Bootstrap Vue
    pageHeadline,
    ProgressBar
  },
  data() {
    return {
      productData: [
        {
          "id": 1,
          "name": "Earphones",
          "price": 12690,
          "imageUrl": "../assets/Images/Earphone.png",
          "desc": "Silver",
          "quantity": 0, // Add default quantity
          "subtotal": 0, // Add default subtotal
        },
        {
          "id": 2,
          "tagline": "200 Cash back",
          "name": "Test 6X",
          "price": 14000,
          "imageUrl": "../assets/Images/Earphone.png",
          "desc": "32GB Gold \n\n Extended Warranty",
          "quantity": 0, // Add default quantity
          "subtotal": 0, // Add default subtotal
          "planLink": "http://pointstonothing.com/linktoplan",
          "gift": {
            "name": "Glory Selfie Stick",
            "desc": "Silver Moon",
            "price": 175
          }
        },
        {
          "id": 3,
          "name": "Test 6X",
          "price": 18000,
          "imageUrl": "../assets/Images/Earphone.png",
          "desc": "64GB Gold \n\n Extended Warranty",
          "quantity": 0, // Add default quantity
          "subtotal": 0, // Add default subtotal
          "planLink": "http://pointstonothing.com/linktoplan",
          "gift": {
            "name": "Glory Selfie Stick",
            "desc": "Silver Moon",
            "price": 175
          }
        },
      ],
    };
  },
  methods: {
    updateProducts(updatedProducts) {
      this.productData = updatedProducts;
    }
  }
}
</script>
<style scoped>
@media only screen and (max-width: 767px) {
  .progress-bar {
    display: none;
  }
}
</style>
