<template>
  <div class="mt-10 pl-50 pr-50 pb-20">
    <h1 class="text-6xl font-bold opacity-80 border-b mb-5 pb-5 border-b-gray-300">{{ card.name }}</h1>
    <div class="">
    <NuxtImg :src="card.img" :alt="card.name" class="w-full rounded-2xl overflow-hidden mix-blend-multiply"/>
    </div>
    <div class="text-left">
        <span class="text-[#c4c4c4] block text-3xl text-center uppercase border-b pb-5 mt-5">Стоимость: </span>
      <p class="font-bold text-center mb-5 mt-5 tracking-widest text-4xl">{{ card.price }} ₽</p>
      <span class="text-[#c4c4c4] block text-3xl text-center uppercase border-b pb-5">Описание</span>
      <div v-for="descr in card.description">
        <p class="text-3xl font-bold text-center mb-5 mt-5">{{ descr.title }}</p>
        <p class="text-1xl inline font-bold">{{ descr.subtitle }}</p>
        <span>{{descr.subDescription}}</span>
      </div>
        <p class="text-[#c4c4c4] block text-3xl text-center uppercase border-b pb-5">презентация</p>
      <div v-for="present in card.presentation">
        <span class="text-1xl inline font-bold">{{present.subtitle}}</span>
        <span>{{present.subDescription}}</span>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps(['card'])


</script>

<style scoped>

</style>
