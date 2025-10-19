<template>
<div class="grid grid-cols-3 gap-6 ml-6 mr-6">
  <div  v-for="card in cards" :key="card.id" class="w-full rounded-[4px] overflow-hidden text-center mb-10 mr-10 bg-[#F2F2F2] hover:bg-[#e0e0e0]">
    <catalog-card-single :card="card"/>
  </div>
</div>
</template>

<script setup>

defineProps(['cards'])

</script>

<style scoped>

</style>
