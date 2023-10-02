<script setup lang="ts">
import { sayHello } from "~/composables/hello";

const version = 2 + 1;
const message = ref('Nuxt')

function hello () {
  sayHello(message.value)
}
const route = useRoute()
const params = route.params;
const { data, error } = await useAsyncData(`user:${params._}`, async () => {
  const result = await $fetch('/api/blog');
  return {hola:params._,users:result}
})

</script>

<template>
  <div class="hello">
    Hello Nuxt {{ version }}!
<div>params={{ data }}</div>
    <form @submit.prevent="hello">
    <h1>Demo with auto imports</h1>
    <CustomInput v-model="message" />
    <button type="submit">Hello</button>
  </form>
  </div>
</template>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 2rem;
}
</style>
