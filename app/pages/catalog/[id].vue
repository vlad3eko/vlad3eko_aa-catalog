<template>
  <div class="container ">
    <catalog-card-details :card="data"/>


    <h2 class="text-2xl text-left border-b-gray-700 pb-5">Так-же выбирают</h2>
    <CatalogCardsScroll/>
  </div>
</template>

<script setup>

definePageMeta({
  layout: 'operators-prod',
})

const route = useRoute()

const {data, error} = await useFetch(`/api/catalog/${route.params.id}`)

if (!data.value || error.value) {
  throw createError({
    statusCode: error?.value?.statusCode,
    statusMessage: error?.value?.data?.message || 'An error occurred',
    fatal: true,
  })
}

</script>

<style scoped>

</style>
