<template>
    <header>
      <nav>
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <!-- Add more navigation links as needed -->
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
  /* Add your CSS styles for the header here */
  header {
    background-color: #333;
    color: #fff;
    padding: 10px 0;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  nav ul li {
    display: inline;
    margin-right: 20px;
  }
  
  nav a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }
  
  /* Customize styles to match your design */
  </style>
  