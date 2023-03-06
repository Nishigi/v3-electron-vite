<template>
    <div>{{ man }}</div>
    <div>{{ reallyMan.name }}</div>
    <hr>
    <button @click="change">change</button>
</template>
  
<script setup lang='ts'>
import { ref,reactive } from "vue";
type M=string
const man=ref<M>('good man')
const reallyMan = reactive({
  name:'god'
})
const change=()=>{
  man.value='nice man'
  reallyMan.name='boy'
}

</script>
  
<style scoped>
  
</style>
