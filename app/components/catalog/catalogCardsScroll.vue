<template>
  <div class="flex overflow-hidden overflow-y-scroll h-full relative theme-background z-999  overflow-x-scroll">
      <div v-for="scroll in cards" class="mb-5 mr-5 first:mt-5 last:mb-5 self-end">
        <NuxtLink :to="`/catalog/${scroll.id}`">
          <div class="w-[250px]">
            <NuxtImg :src="scroll.img"
                     class="max-h-[250px] mx-auto object-cover z-[999]"/>
            <span class="block theme-titles rounded-2xl uppercase border-b">
              {{ scroll.name }}</span>
          </div>
        </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps(['cards', 'scrollBar'])

const {data: cards} = await useFetch('/api/catalog')
console.log('cards', cards)

</script>

<style scoped>

</style>
