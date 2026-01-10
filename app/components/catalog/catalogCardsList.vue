<template>
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mx-4 w-full">
  <div v-for="card in cards" :key="card.id" class="w-full text-center mr-10">
    <catalog-card-single :card="card"/>
  </div>
</div>
</template>

<script setup>

defineProps(['cards'])

</script>

<style scoped>

</style>
