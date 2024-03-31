<script lang="ts" setup>
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-md bg-primary navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
      </div>
    </nav>
    <Header></Header>


    <slot />
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
