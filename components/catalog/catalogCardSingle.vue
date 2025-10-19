<template>
  <div class="cursor-pointer">
    <NuxtLink :to="`/catalog/${card.id}`">
      <div class="overflow-hidden rounded-[4px]">
        <NuxtImg :src="card.img" class="h-[450px] object-cover w-full mix-blend-multiply"/>
      </div>
      <div class="m-5">
        <p class="font-bold border-b border-b-gray-300 pb-2">
          {{ card.name }}
        </p>
          <p class="text-[#c4c4c4]">
            {{ card.description[1].subtitle }}
            {{ card.description[2].subtitle }}
            {{ card.description[3].subtitle }}
            {{ card.description[4].subtitle }}
            {{ card.description[5].subtitle }}
          </p>
      </div>
    </NuxtLink>
    <div class="flex justify-around m-1">
      <p>
        {{ card.price }} ₽
      </p>
      <p>
        <span class="material-icons p-1 bg-[#12777E] text-white cursor-pointer">add</span>
      </p>
    </div>
  </div>
</template>

<script setup>

const {card} = defineProps(['card'])

</script>

<style scoped>

</style>
