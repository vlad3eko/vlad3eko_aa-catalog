<template>
  <div class="mt-10 ">
    <h1 class="pt-4 sticky text-4xl font-bold border-b mb-5 pb-5 border-b-gray-300 bg-gray-200 uppercase z-[999] top-12">
      {{ card.name }}</h1>
    <div class="flex">
      <div class="self-start mr-10 sticky top-10 z-999 mix-blend-multiply">
        <NuxtImg :src="card.img" :alt="card.name" class="rounded-2xl  max-h-full scale-x-80 scale-y-80 "/>
      </div>
      <div class="text-left pb-20 max-w-200">
        <span class="text-[#c4c4c4] block text-3xl text-center uppercase border-b pb-5 mt-5">Стоимость: </span>
        <p class="font-bold text-center mb-5 mt-5 tracking-widest text-4xl">{{ card.price }} ₽</p>
        <span class="text-[#c4c4c4] block text-3xl text-center uppercase border-b pb-5">Описание</span>
        <div v-for="descr in card.description">
          <p class="text-3xl font-bold text-center mb-5 mt-5 bg-amber-300 rounded-2xl uppercase" ref="descrTitle">
            {{ descr.title }}</p>
          <p class="text-1xl inline font-bold">{{ descr.subtitle }}</p>
          <span>{{ descr.subDescription }}</span>
        </div>
        <p class="text-[#c4c4c4] block text-3xl text-center uppercase border-b pb-5 mt-5">презентация</p>
        <div v-for="present in card.presentation">
          <span class="text-1xl inline font-bold">{{ present.subtitle }}</span>
          <span>{{ present.subDescription }}</span>
        </div>
      </div>
    </div>
  </div>

  <CardScrollBar/>

</template>

<script setup>

defineProps(['card'])

</script>

<style scoped>

</style>
