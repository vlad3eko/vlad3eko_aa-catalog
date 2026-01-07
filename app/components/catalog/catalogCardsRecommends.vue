<template>
    <h2 class="text-2xl w-max mb-5 px-5">Так-же выбирают:</h2>
  <div class="flex items-center gap-5 px-5">

    <button @click="swiper.prev()">
      <span :class="MATERIAL_ICON_CLASS_COLOR_TEXT"
            class="md-48 scale-x-[-1] cursor-pointer">arrow_forward</span>
    </button>

    <ClientOnly>
      <swiper-container ref="swiperRef" :init="false" :slides-per-view="5" class="overflow-hidden relative ">
        <swiper-slide v-for="recommendCard in cards" :key="recommendCard.id" class="mr-10">
          <NuxtLink :to="`/catalog/${recommendCard.id}`">
            <div class="max-w-[250px] h-[320px] flex flex-col justify-between">
              <div class="text-price font-bold text-response mb-2 block">
                <span v-if="!isRange(recommendCard.price)">
                  {{ recommendCard.price }}
                </span>
                <span v-if="isRange(recommendCard.price)">
                  {{ recommendCard.price[0] }} - {{ recommendCard.price[1] }}
                </span>
                ₽
              </div>
              <NuxtImg :src="recommendCard.img"
                       class="max-h-[250px] mx-auto"/>
              <span class="rounded-2xl uppercase text-primary font-bold text-response">
              {{ recommendCard.name }}</span>
            </div>
          </NuxtLink>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>

    <button @click="swiper.next()">
      <span :class="MATERIAL_ICON_CLASS_COLOR_TEXT"
            class="md-48 cursor-pointer">arrow_forward</span>
    </button>

  </div>
</template>

<script lang="ts" setup>

import {MATERIAL_ICON_CLASS_COLOR_TEXT} from "~~/server/utils/classes/material-icon.shortcut";
import {isRange} from "~~/server/utils/hooks/range.price";
import ToggleSection from "~/components/ui/ToggleSection.vue";

const {data: cards} = await useFetch('/api/catalog')


const swiperRef = ref<any>(null)

const swiper = useSwiper(swiperRef, {
  effect: 'slide',
  loop: true,
})

</script>

<style scoped>

</style>
