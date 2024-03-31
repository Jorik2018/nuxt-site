<script setup lang="ts">
import { sayHello } from "~/composables/hello";
const config = useRuntimeConfig();
const message = ref('Nuxt')

function hello() {
  sayHello(message.value)
}

const route = useRoute()
const params = route.params;
const fullPath = route.fullPath;
const dst = (config.app.baseURL.substring(1) + fullPath).replace(/\/{2,}|\/$/g, '');
console.log(dst)
const { data, error }: any = await useAsyncData(dst, async () => {
  return $fetch('http://190.119.114.163/api/obresec/node?dst=' + dst);
})
const yolo = resolveComponent('directory')
</script>
<template>
  <div>
    <div class="obresec_h" style="margin: 40px 100px 0px 100px; width: calc(100% - 200px);display: flex;">
      <div style="flex: auto;">
        <a href="/obresec"> <img src="~/assets/obresec-logo.png" alt="obresec-logo"></a>
      </div>
      <div>
        <div class="btn-group" style="text-align: right;">
          <NuxtLink to="/nosotros" class="btn btn-primary" :class="[{ active: fullPath == '/nosotros' }]">Nosotros
          </NuxtLink>
          <NuxtLink to="/contacto" class="btn btn-primary" :class="[{ active: fullPath == '/contacto' }]">Contacto
          </NuxtLink>
          <NuxtLink to="http://www.regionancash.gob.pe/coresec.php" class="btn btn-primary">CORESEC</NuxtLink>
        </div>
      </div>
    </div>
    <div class="ui-node-content" style="margin: 40px 100px 40px 100px; width: calc(100% - 200px);">
      <h3 style="margin-top:0px;margin-bottom:20px;padding-right:24px; text-align: center;" class="title uppercase">{{ data.revision.title }}
      </h3>
      <div v-if="data.id"  v-html="data.revision.body">
      </div>
      <div v-else="data.id">
        <component :is="yolo"></component>
      </div>
    </div>
  </div>
</template>

<style>
.hello {}

.obresec_h img {
  width: 300px;
}

.obresec_h .btn {
  --bs-btn-font-size: 120%;
}
.coresec > div > div{
  border-radius: 15px;
}

.coresec > div > div:hover > div:nth-child(1) {
background-color: #106e8a;
color: white;
}
.coresec > div > div > div:nth-child(1) {
padding: 15px;
border-radius: 15px 15px 0px 0px;
text-transform: uppercase;
margin-bottom: 15px;
font-weight: bolder;
}
.coresec {
    display: flex;
    flex-direction: row;
    text-align: center;
}
.v-col-3{
  flex: 3;
  text-align: center;
display: flex;
justify-content: center;
}
</style>
