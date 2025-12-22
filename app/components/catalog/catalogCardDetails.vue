<template>
  <div class="mt-5">
    <h1 class="pt-4 sticky text-4xl font-bold border-b mb-5 pb-5 border-b-gray-300 theme-panels uppercase  top-15 select-text">
      {{ card.name }}</h1>
    <div class="grid grid-cols-2">
      <div class="self-start sticky top-20 z-999 scale-x-75 scale-y-75">
        <NuxtImg :src="card.img" :alt="card.name"/>
      </div>
      <div class="text-left pb-20 w-5xl">
        <span
            class="text-[#c4c4c4] block text-3xl text-center uppercase border-b pb-5 mt-5 cursor-pointer">Стоимость: </span>
        <p class="font-bold text-center mb-5 mt-5 tracking-widest text-4xl">{{ card.price }} ₽</p>
        <div @click="showDescription = !showDescription" class="relative">
          <span
              class="text-[#c4c4c4] block text-3xl text-center uppercase border-b pb-5 mt-5 cursor-pointer">Описание</span>
          <div class="absolute top-3 right-0">
            <span v-if="!showDescription" class="material-symbols-outlined theme-text">visibility_off</span>
            <span v-else class="material-symbols-outlined theme-text">visibility</span>
          </div>
        </div>

        <div v-if="showDescription">
          <div v-for="descr in card.description">
            <p
                class="text-3xl font-bold text-center mb-5 mt-5 theme-titles rounded-2xl uppercase"
                ref="descrTitle">
              {{ descr.title }} </p>
            <p
                class="text-1xl inline font-bold">
              {{ descr.subtitle }}
            </p>
            <span>
              {{ descr.subDescription }}
            </span>
          </div>
        </div>

        <div @click="showPresentation = !showPresentation" class="relative">
          <span class="text-[#c4c4c4] block text-3xl text-center uppercase border-b pb-5 mt-5 cursor-pointer">Презентация</span>
          <div class="absolute top-3 right-0">
            <span v-if="!showPresentation" class="material-symbols-outlined theme-text">visibility_off</span>
            <span v-else class="material-symbols-outlined theme-text">visibility</span>
          </div>
          <div v-show="showPresentation">
            <div v-for="present in card.presentation">
              <div v-if="present.length">
                <span class="text-1xl inline font-bold">{{ present.subtitle }}</span>
                <span>{{ present.subDescription }}</span>
              </div>
              <span v-else class="text-2xl inline">В процессе разработки..</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps(['card'])

const showDescription = ref(true)
const showPresentation = ref(false)

</script>

<style scoped>

</style>
