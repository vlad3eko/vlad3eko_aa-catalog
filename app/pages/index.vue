<template>
  <div class="font-bold rounded-2xl bg-shell flex justify-center items-center sticky top-12 left-50 select-none">
    <catalog-sort v-model="searchCards" v-model:category="selectedCategory" :categories="arrayCategories"
                  :cards="filteredCatalogs"/>
    <div v-show="searchCards || selectedCategory" @click="resetControls" class="rounded-2xl cursor-pointer border flex h-full p-2 ml-2 font-bold uppercase tracking-widest transition-colors">
      <span
          :class="MATERIAL_ICON_CLASS_COLOR_TEXT"
      >search_off</span>
    </div>
  </div>
  <div class="flex justify-around flex-wrap mt-10">
    <catalog-cards-list :cards="filteredCatalogs"/>
  </div>
</template>

<script lang="ts" setup>

useSeoMeta({
  title: "Агент-Ассист",
})

import {MATERIAL_ICON_CLASS_COLOR_TEXT} from "~~/server/utils/classes/material-icon.shortcut";

definePageMeta({
  layout: 'operators-prod',
})

const {data: cards} = await useFetch('/api/catalog')

const arrayCategories = ref([...new Set(cards.value?.map(item => item.category))])
const searchCards = ref<string>('')
const selectedCategory = ref<string>('')

const filteredCatalogs = computed(() => {
  if (!searchCards.value && !selectedCategory.value) {
    return cards.value
  } else if (searchCards.value) {
    return cards.value?.filter(card =>
        card.product.toLowerCase().includes(searchCards.value.toLowerCase())
    )
  } else if (selectedCategory.value) {
    return cards.value?.filter(card =>
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
