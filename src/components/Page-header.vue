<template>
  <div>
    <nav class="navbar navbar-dark text-white " style="background-color: blue;">
      <!-- Logo on the left side -->
      <a class="navbar-brand mx-2" href="#">
        <img src="../assets/Images/logo.png" alt="Your Company Logo" height="" >
      </a>

      <!-- Buttons with icons on the right side -->
      <div class="d-flex align-items-center" >
        <button @click="handleButtonClick('trackOrder')" class="btn text-white ">
          Track Order
        </button> |
        <img  @click="handleButtonClick('search')" src="../assets/icon/search.png" alt="Search Icon" class="ml-2 mr-2 text-white"/> |
        <img @click="handleButtonClick('user')" src="../assets/icon/user.png" alt="User Icon" class="ml-2 mr-2 text-white"/> |
        <img @click="handleButtonClick('shoppingCart')" src="../assets/icon/shopping.png" alt="Shopping Cart Icon" class="ml-2 text-white"/> 
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    handleButtonClick(button) {
      // Handle button click logic here
      console.log(button + ' clicked');
    },

  },
};
</script>

<!-- Include Font Awesome for icons -->
<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
</style>
