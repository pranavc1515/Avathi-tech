<template>
  <div id="app" class="shopping-app container">
 
    <div class="row">
      <div class="col-lg-12">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td class="d-flex align-items-center">
                  <img src="../assets/Images/Earphone.png" alt="product.name" class="img-thumbnail" />
                  <div class="cart-item-details ml-2">
                    <h5>{{ product.name }}</h5>
                    <p>{{ product.desc }}</p>
                  </div>
                </td>
                <td>${{ product.price }}</td>
                <td>
                  <div class="quantity-input">
                    <button @click="decrementQuantity(product)" class="btn btn-secondary">-</button>
                    <input type="number" v-model="product.quantity" min="0" @change="updateSubtotal(product)">
                    <button @click="incrementQuantity(product)" class="btn btn-secondary">+</button>
                  </div>
                </td>
                <td>${{ product.subtotal }}</td>
                <td>
                  <button class="btn " @click="removeFromCart(product.id)">
                  <img src="../assets/icon/DELETE.png"/>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p v-if="products.length === 0">Your cart is empty</p>
        <p>Total: ${{ total }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: { type: Array, required: true }
  },
  data() {
    return {
      
      
    }
  },
  computed: {
    total() {
      return this.products.reduce((acc, product) => acc + product.subtotal, 0);
    }
  },
  methods: {
    updateSubtotal(product) {
      const quantity = isNaN(product.quantity) ? 0 : product.quantity;
      product.subtotal = product.price * quantity;
      this.$emit('update-products', [...this.products]); // Emit updated products
    },
    removeFromCart(productId) {
  const updatedProducts = this.products.filter(product => product.id !== productId);
  this.$emit('update-products', updatedProducts); // Emit updated products
},

    incrementQuantity(product) {
      product.quantity++;
      this.updateSubtotal(product);
    },
    decrementQuantity(product) {
      if (product.quantity > 0) {
        product.quantity--;
        this.updateSubtotal(product);
      }
    }
  },
};
</script>

<style scoped>
.shopping-app {
  padding: 20px;
}

.cart-item-details {
  display: flex;
  flex-direction: column;
}

.cart-item-details h5 {
  margin-bottom: 5px;
}

.cart-item-details p {
  margin-bottom: 0;
}

.quantity-input {
  display: flex;
  align-items: center;
}

.quantity-input button {
  margin: 0;
}
</style>
