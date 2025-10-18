<template>
  <div class="mt-10">
    <div v-for="card in cards" :key="card.id">
    </div>
    <form action="">
      <label for="selectCategory">Категория: </label>
      <select form="selectCategory" class="text-center pl-2 pr-2">
        <option @click="onSelectCategory(category)" :value="category" v-for="(category, index) in categories"
                :key="index">{{ category }}
        </option>
      </select>
      <input type="text" v-model="search" placeholder="название товара.." class="border p-1">
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
