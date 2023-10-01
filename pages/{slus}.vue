<template>
  <div>{{ route }}
    <Header />
    <Tutorial/>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Vue from 'vue'
/*async asyncData({ params }) {
    const contentFromDb = {params}"await getContentFromDatabase()"";
    return { contentFromDb };
  },*/
  const route = useRoute()
  
  const url = useRequestURL()

</script>
