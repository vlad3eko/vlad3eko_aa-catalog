<template>
  <h2 class="text-2xl text-left border-b-gray-700 pb-5">Так-же выбирают</h2>
  <div class="flex overflow-hidden h-full relative rounded-2xl overflow-x-scroll">
      <div v-for="recommend in cards" class="mb-5 mr-5 first:mt-5 last:mb-5 self-end">
        <NuxtLink :to="`/catalog/${recommend.id}`">
          <div class="w-[250px]">
            <NuxtImg :src="recommend.img"
                     class="max-h-[250px] mx-auto object-cover z-[999]"/>
            <span class="text-[#10C44C] font-bold text-2xl mb-2 block">
              {{ recommend.price }} ₽</span>
            <span class="block theme-titles rounded-2xl uppercase border-b">
              {{ recommend.name }}</span>
          </div>

        </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps(['cards'])

const {data: cards} = await useFetch('/api/catalog')
console.log('cards', cards)

</script>

<style scoped>

</style>
