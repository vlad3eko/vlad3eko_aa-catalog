<template>
  <div class="p-2 flex justify-center items-center">
    <div v-for="card in cards" :key="card.id">
    </div>
    <form action="" class="theme-panels">
      <label for="selectCategory">Категория: </label>
      <select form="selectCategory" class="text-center pl-2 pr-2 theme-text theme-panels">
        <option @click="onSelectCategory(category)" :value="category" v-for="(category, index) in categories"
                :key="index">{{ category }}
        </option>
      </select>
    </form>
      <input type="text" v-model="search" placeholder="название товара.." class="border p-1">
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
