<template>
  <h2 class="text-2xl text-left border-b-gray-700 pb-5">Так-же выбирают</h2>
  <div class="flex items-center gap-5">

    <button @click="swiper.prev()">
      <span class="material-symbols-outlined scale-x-[-2] scale-y-[2] theme-text">arrow_forward</span>
    </button>

    <ClientOnly>
      <swiper-container ref="swiperRef" :init="false" :slides-per-view="6" class="flex overflow-hidden relative">
        <swiper-slide v-for="recommendCard in cards" :key="recommendCard.id" class="mr-5 self-end">
          <NuxtLink :to="`/catalog/${recommendCard.id}`">
            <div class="w-[250px]">
              <NuxtImg :src="recommendCard.img"
                       class="max-h-[250px] mx-auto object-cover z-[999]"/>
              <div class="text-[#10C44C] font-bold text-2xl mb-2 block">
                <span v-if="!isRange(recommendCard.price)">
                  {{ recommendCard.price }}
                </span>
                <span v-if="isRange(recommendCard.price)">
                  {{ recommendCard.price[0] }} - {{ recommendCard.price[1] }}
                </span>
                ₽
              </div>
              <span class="block theme-titles rounded-2xl uppercase border-b">
              {{ recommendCard.name }}</span>
            </div>
          </NuxtLink>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>

    <button @click="swiper.next()">
      <span class="material-symbols-outlined scale-x-[2] scale-y-[2] theme-text">arrow_forward</span>
    </button>

  </div>
</template>

<script lang="ts" setup>

const {data: cards} = await useFetch('/api/catalog')

const swiperRef = ref<any>(null)

const swiper = useSwiper(swiperRef, {
  effect: 'slide',
  loop: true,
  creativeEffect: {
    prev: {
      shadow: true,
    },
    next: {
      shadow: true,
    },
  },
})

const isRange = (price: number | [number, number]): price is [number, number] => {
  return Array.isArray(price)
}

</script>

<style scoped>

</style>
