<template>
  <div class="pt-2 pb-2 flex items-center">
    <div v-for="card in cards" :key="card.id">
    </div>
    <form class=" rounded-2xl relative">
      <select form="selectCategory" class="text-center bg-background accent-active absolute top-0 right-0 pl-5 scale-x-95 scale-y-90 h-full rounded-2xl">
        <option @click="onSelectCategory(category)" :value="category" v-for="(category, index) in categories"
                :key="index">{{ category }}
        </option>
      </select>
      <input type="text" v-model="search" placeholder="название товара.." class="border pl-5 pr-40 pt-2 pb-2 rounded-2xl bg-background">
    </form>
  </div>
</template>

<script setup>

defineProps(['cards', 'categories'])

const search = defineModel({required: true})
const category = defineModel('category', {required: true})

const onSelectCategory = (payload) => {
  category.value = payload
}

</script>

<style scoped>

</style>
