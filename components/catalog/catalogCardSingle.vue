<template>
  <div class="cursor-pointer flex flex-col justify-between ">
    <NuxtLink :to="`/catalog/${card.id}`">
      <div class="flex justify-around m-1">
        <p class="font-bold text-2xl text-neutral-700">
          {{ card.price }} ₽
        </p>
        <p v-show="false">
          <span class="material-icons p-1 bg-[#12777E] text-white cursor-pointer">add</span>
        </p>
      </div>
      <div class="overflow-hidden rounded-[4px]">
        <NuxtImg :src="card.img" class="h-[450px] object-cover w-full mix-blend-multiply"/>
      </div>
      <div class="m-5">
        <p class="font-bold border-b border-b-gray-300 pb-2">
          {{ card.name }}
        </p>
          <p class="text-[#707070]">
            {{ card.description[1].subtitle }}
            {{ card.description[2].subtitle }}
            {{ card.description[3].subtitle }}
            {{ card.description[4].subtitle }}
            {{ card.description[5].subtitle }}
          </p>
      </div>
    </NuxtLink>

  </div>
</template>

<script setup>

const {card} = defineProps(['card'])

</script>

<style scoped>

</style>
