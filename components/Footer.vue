<template>
    <footer class="grid">
      <!-- First Column -->
      <div class="col-12 md:col-4 lg:col-4">
        <h4>Contact Us</h4>
        <p>123 Main St</p>
        <p>City, Country</p>
        <p>Email: example@example.com</p>
      </div>
  
      <!-- Second Column -->
      <div class="col-12 md:col-4 lg:col-4">
        <h4>Follow Us</h4>
        <p>Twitter</p>
        <p>Facebook</p>
        <p>Instagram</p>
      </div>
  
      <!-- Third Column -->
      <div class="col-12 md:col-4 lg:col-4">
        <h4>Newsletter</h4>
        <p>Subscribe to our newsletter to get updates.</p>
        <div class="p-inputgroup">
          <input type="text" placeholder="Enter your email" class="p-inputtext" />
          <button class="p-button p-button-primary">Subscribe</button>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here if needed */
  </style>
  