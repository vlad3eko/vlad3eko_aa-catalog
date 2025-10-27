<template>
  <div class="theme-panels hd rounded-3xl flex justify-center items-center sticky top-15.5 left-50 select-none">
    <catalog-sort v-model="searchCards" v-model:category="selectedCategory" :categories="arrayCategories"
                  :cards="filteredCatalogs"/>
    <div v-show="searchCards || selectedCategory" @click="resetControls" class="cursor-pointer border w-max flex h-full p-1 hover:text-[#12b488] font-bold uppercase tracking-widest transition-colors">
      <span class="material-symbols-outlined theme-text">search_off</span>
      <p>Сбросить фильтр</p>
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
