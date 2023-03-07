<template>
    <div>{{ man }}</div>
    <div>{{ reallyMan.name }}</div>
    <hr>
    <button @click="change">change</button>
    <HelloWorld msg="233" ></HelloWorld>
</template>
  
<script setup lang='ts'>
import  HelloWorld from "./components/HelloWorld.vue";
import { ref,reactive } from "vue";
type M=string
const man=ref<M>('good man')
const reallyMan = reactive({
  name:'god',
  age:18
})
const change=()=>{
  man.value='nice man'
  reallyMan.name='boy'
}

</script>
  
<style scoped>
  
</style>
