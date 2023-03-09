<script setup lang="ts">
// import { ref,toRef,toRaw,toRefs} from 'vue'
import { useTestStroe } from "../stores";
const Test=useTestStroe()
defineProps<{ msg: string }>()

</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>pinia:{{ Test.age+'-------'+Test.name }}</h1>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
