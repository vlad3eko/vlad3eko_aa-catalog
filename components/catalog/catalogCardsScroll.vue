<template>
  <div class="flex flex-col max-h-screen overflow-hidden overflow-y-scroll h-full relative">
    <div class="sticky top-0 left-0">
      <div v-for="scroll in cards" class="border border-amber-300 mb-5 mr-5">
        <NuxtLink :to="`/catalog/${scroll.id}`">
          <div class="h-[200px] w-[200px] first:mt-0 mb-10">
            <NuxtImg :src="scroll.img"
                     class="h-[200px] w-[200px] scale-x-80 scale-y-80 object-cover mix-blend-multiply z-[999]"/>
            <span class="block bg-amber-300 rounded-2xl uppercase border-b">
              {{ scroll.name }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps(['cards'])

const {data: cards} = await useFetch('/api/catalog')

</script>

<style scoped>

</style>
