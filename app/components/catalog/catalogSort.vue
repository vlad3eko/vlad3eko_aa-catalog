<template>
  <div class="p-2 flex items-center ">
    <div v-for="card in cards" :key="card.id">
    </div>
    <form class="border border-black rounded-2xl relative">
      <select form="selectCategory" class="text-center theme-text theme-panels absolute top-0 right-0 pl-5 h-full rounded-2xl">
        <option @click="onSelectCategory(category)" :value="category" v-for="(category, index) in categories"
                :key="index">{{ category }}
        </option>
      </select>
      <input type="text" v-model="search" placeholder="название товара.." class="border pl-5 pr-40 pt-2 pb-2 rounded-2xl theme-panels">
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
