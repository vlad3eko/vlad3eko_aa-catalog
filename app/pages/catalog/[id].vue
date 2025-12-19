<template>
  <div class="container pb-20">
    <catalog-card-details :card="data"/>
    <CatalogCardsRecommends/>
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
