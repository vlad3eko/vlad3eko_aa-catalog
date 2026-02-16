<template>
  <div class="bg-shell rounded p-5">
    <h2 class="text-2xl w-max mb-5 px-5">Так-же выбирают:</h2>
    <div class="flex items-center gap-5 px-5">

      <ClientOnly>
        <swiper-container ref="swiperRef" :init="false" :slides-per-view="7" class="overflow-hidden relative ">
          <swiper-slide v-for="recommendCard in cards" :key="recommendCard.id" class="mr-10">
            <NuxtLink :to="`/catalog/${recommendCard.id}`">
              <div class="max-w-[250px] h-[200px] flex flex-col justify-between">
                <div class="text-right col-start-3 self-center">
          <span v-if="!isRange(recommendCard.price)">
                  <p class="text-2xl text-price tracking-[.25em]">{{ recommendCard.price }}</p>
                </span>
                  <span v-else class="flex justify-end gap-2 items-center">
                  <p class="text-price-sale tracking-[.15em]">{{ recommendCard.price[0] }}</p> / <p
                      class="text-2xl text-price tracking-[.15em]">{{ recommendCard.price[1] }}</p>
                </span>
                </div>
                <NuxtImg :src="recommendCard.img"
                         class="max-h-[120px] mx-auto"/>
                <span class="text-muted-foreground text-response">
              {{ recommendCard.product }}</span>
              </div>
            </NuxtLink>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>

    </div>
  </div>

</template>

<script lang="ts" setup>

import {MATERIAL_ICON_CLASS_COLOR_TEXT} from "~~/server/utils/classes/material-icon.shortcut";
import {isRange} from "~~/server/utils/hooks/range.price";

const {data: cards} = await useFetch('/api/catalog')


const swiperRef = ref<any>(null)

const swiper = useSwiper(swiperRef, {
  effect: 'slide',
  loop: true,
  breakpoints: {
    200: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3.5,
      spaceBetween: 30
    },
    1020: {
      slidesPerView: 5.5,
      spaceBetween: 40
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 7.5,
      spaceBetween: 40
  }
  }
})

</script>

<style scoped>

</style>
