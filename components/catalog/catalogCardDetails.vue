<template>
  <div >
    <NuxtImg :src="card.img" :alt="card.name" />
    <h1>{{ card.name }}</h1>
    <p>{{ card.description }}</p>
    <p>Цена: {{ card.price }}</p>
  </div>
</template>

<script setup>

defineProps(['card'])

</script>

<style scoped>

</style>
