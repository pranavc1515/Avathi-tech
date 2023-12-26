<template>
  <div class="delivery-checker">
    <div class="input-container">
      <img src="../assets/icon/LOCATION.png" alt="locations" />
      <input type="text" id="pincode" v-model="userPincode" placeholder="Enter PIN code" />
      <button @click="clearPincode">CHANGE</button>
    </div>
    <hr />

    <div v-if="deliveryInfo" class="delivery-info">
      <div v-if="deliveryInfo.freeDelivery" class="delivery-option">
        <div class="icon-container">
          <img v-if="deliveryInfo.freeDelivery" src="@/assets/icon/check.png" alt="Free Delivery" />
        </div>
        <div class="text-container">
          <div class="icon-text">Free Delivery</div>
        </div>
      </div>
      <div v-if="deliveryInfo.cashOnDelivery" class="delivery-option">
        <div class="icon-container">
          <img v-if="deliveryInfo.cashOnDelivery" src="@/assets/icon/check.png" alt="Cash on Delivery" />
        </div>
        <div class="text-container">
          <div class="icon-text">Cash on Delivery</div>
        </div>
      </div>
      <div class="delivery-option">
        <div class="icon-container">
          <img src="@/assets/icon/check.png" alt="Estimated Delivery" />
        </div>
        <div class="text-container">
          <div class="icon-text">
            Estimated Delivery Time: {{ deliveryInfo.estimatedDays.min }} - {{ deliveryInfo.estimatedDays.max }} days
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .delivery-checker {
    max-width: 100%;
    padding: 20px;
    box-sizing: border-box;
    margin: auto;
  }

  .input-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .input-container img {
    margin-right: 10px;
  }

  input {
    flex: 1;
    border: none;
    text-decoration: none;
    outline: none;
  }

  button {
    color: blue;
    border: none;
    cursor: pointer;
    background-color: white;
  }

  .delivery-info {
    display: flex;
    flex-direction: row;
  }

  .delivery-option {
    display: flex;
    margin-bottom: 10px;
    align-items: flex-start; /* Align items at the start of the container */
  }

  .icon-container {
    margin-right: 10px;
  }

  .icon-container img {
    width: 24px;
    height: 24px;
  }

  .text-container {
    font-size: 16px;
    color: #333;
  }

  .icon-text {
    margin-top: 5px; /* Add spacing between icon and text */
  }

  hr {
    margin: 20px 0;
  }

  @media only screen and (max-width: 600px) {
    .input-container {
      flex-direction: column;
      align-items: flex-start;
    }

    input {
      margin-bottom: 10px;
    }

    .delivery-info {
    display: flex;
    flex-direction: column;
  }
  }
</style>


<script>
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      userPincode: "",
      deliveryInfo: null,
      pincodeData: [
        {
          pincode: "560066",
          deliveryPrice: 50,
          cashOnDelivery: false,
          estimatedDays: { min: 2, max: 5 },
        },
        {
          pincode: "560067",
          deliveryPrice: 0,
          cashOnDelivery: true,
          estimatedDays: { min: 3, max: 5 },
        },
        {
          pincode: "560068",
          deliveryPrice: 0,
          cashOnDelivery: false,
          estimatedDays: { min: 5, max: 5 },
        },
      ],
    };
  },
  watch: {
    userPincode(newPincode) {
      // Watch for changes in userPincode and trigger checkDeliveryAvailability when a 6-digit value is entered
      if (newPincode.length === 6) {
        this.checkDeliveryAvailability();
      }
    },
  },
  methods: {
    checkDeliveryAvailability() {
      const pincodeInfo = this.pincodeData.find((item) => item.pincode === this.userPincode);

      if (pincodeInfo) {
        this.deliveryInfo = {
          freeDelivery: pincodeInfo.deliveryPrice === 0,
          cashOnDelivery: pincodeInfo.cashOnDelivery,
          estimatedDays: pincodeInfo.estimatedDays,
        };
      } else {
        this.deliveryInfo = null;
   
        // Handle invalid pincode
        Swal.fire({
  title: "Invalid Pincode",
  text: "Please enter a valid pincode.",
  icon: "error"
});


        
      }
    },
    clearPincode() {
      this.userPincode = "";
      this.deliveryInfo = null;
    },
  },
};
</script>