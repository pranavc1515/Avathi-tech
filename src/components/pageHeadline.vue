<template>
    <div>
      <p class="discount-message text-center mt-2 mx-5">Shop for $5000 or more and get 10% discount on your order</p>
    </div>
  </template>
  
  <style>
    /* Custom styling for the discount message */
    .discount-message {
      color: white;
      background-color: blue;
      padding: 10px;
      display: none; /* Hide the message by default */
    }
  
    /* Media query to show the message only on laptops and tablets */
    @media (min-width: 768px) {
      .discount-message {
        display: block;
      }
    }
  </style>