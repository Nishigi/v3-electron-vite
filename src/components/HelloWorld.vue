<script setup lang="ts">
import {toRef,toRaw,toRefs} from 'vue'
// import { ref } from 'vue'

defineProps<{ msg: string }>()

</script>

<template>
  <h1>{{ msg }}</h1>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
