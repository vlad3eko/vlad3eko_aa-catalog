<template>
  <div class="p-2 flex items-center ">
    <div v-for="card in cards" :key="card.id">
    </div>
    <form class="theme-panels relative">
      <select form="selectCategory" class="text-center pl-2 pr-2 theme-text theme-panels absolute top-2.5 right-2">
        <option @click="onSelectCategory(category)" :value="category" v-for="(category, index) in categories"
                :key="index">{{ category }}
        </option>
      </select>
      <input type="text" v-model="search" placeholder="название товара.." class="border pl-5 pr-40 pt-2 pb-2 rounded-2xl">
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
