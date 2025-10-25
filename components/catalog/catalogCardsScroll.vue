<template>
    <span v-if="scrollBar"
          class="material-symbols-outlined absolute top-1/2 left-[-31px] -translate-y-1/2 md-36 theme-text cursor-pointer">arrow_back</span>
  <div class="flex flex-col max-h-screen overflow-hidden overflow-y-scroll h-full relative theme-background z-999 border">
    <div class="sticky top-0 left-0 pl-3">
      <div v-for="scroll in cards" class="border mb-5 mr-5 first:mt-5 last:mb-5">
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
  </div>
</template>

<script setup>

//fixed

defineProps(['cards', 'scrollBar'])

const {data: cards} = await useFetch('/api/catalog')

</script>

<style scoped>

</style>
