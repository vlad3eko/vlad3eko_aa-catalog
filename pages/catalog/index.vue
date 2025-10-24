<template>
  <div class="bg-gray-200 hd">
    <catalog-sort v-model="searchCards" v-model:category="selectedCategory" :categories="arrayCategories"
                  :cards="filteredCatalogs"/>
    <div v-show="searchCards || selectedCategory" class="cursor-pointer border w-max mx-auto mt-5 p-1 flex">
      <span class="material-symbols-outlined">search_off</span>
      <button @click="resetControls" class="cursor-pointer">Сбросить фильтр</button>
    </div>
  </div>
  <div class="flex justify-around flex-wrap mt-10">
    <catalog-cards-list :cards="filteredCatalogs"/>
  </div>
</template>

<script setup>

definePageMeta({
  layout: 'operators-prod',
})

const {data: cards} = await useFetch('/api/catalog')

const arrayCategories = ref([...new Set(cards.value.map(item => item.category))])
const searchCards = ref('')
const selectedCategory = ref('')

const filteredCatalogs = computed(() => {
  if (!searchCards.value && !selectedCategory.value) {
    return cards.value
  } else if (searchCards.value) {
    return cards.value.filter(card =>
        card.name.toLowerCase().includes(searchCards.value.toLowerCase())
    )
  } else if (selectedCategory.value) {
    return cards.value.filter(card =>
        card.category.includes(selectedCategory.value))
  }
})

const resetControls = () => {
  searchCards.value = ''
  selectedCategory.value = ''
}

</script>

<style scoped>

</style>
