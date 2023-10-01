<template>
    <div>
      <!-- Header component (always displayed) -->
      <Header />
  
      <!-- Render content based on the route path -->
      <div class="content">
        <component :is="getContentComponent" :data="data" />
      </div>
  
      <!-- Footer component (always displayed) -->
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
  
  export default {
    components: {
      Header,
      Footer,
    },
    computed: {
      getContentComponent() {
        // Get the route path
        const routePath = this.$route.path;
  
        // Return the appropriate component based on the route path
        if (routePath === '/') {
          return () => import('~/components/Home.vue');
        } else if (routePath === '/about') {
          return () => import('~/components/About.vue');
        } else if (routePath === '/contact') {
          return () => import('~/components/Contact.vue');
        } else {
          // Handle 404 or other routes here
          return () => import('~/components/NotFound.vue');
        }
      },
    },
    data() {
      return {
        data: null,
      };
    },
    async asyncData({ route }) {
      try {
        // Perform API requests based on the route path using the composite API setup
        const routePath = route.path;
  
        // Use your composite API functions to fetch data based on the routePath
        const data = await fetchCompositeData(routePath);
  
        return { data };
      } catch (error) {
        console.error('Error fetching data:', error);
        return { data: null };
      }
    },
  };
  </script>
  