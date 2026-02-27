<template>
    <h1 class="p-2 sticky text-3xl font-bold text-center text-primary bg-shell z-2 uppercase rounded-2xl top-12  select-text shadow-xl">
      {{ props.card.product }}</h1>
    <div class="grid lg:grid-cols-2 px-5 mb-30">
      <div class="flex items-center justify-center self-start lg:sticky lg:top-35 px-10 scale-x-[.85] scale-y-[.85] animate-from-top">
       <div class="flex flex-col gap-5">
         <NuxtImg :src="props.card.img" :alt="props.card.product"/>
         <div
             @click="basket.add(props.card)"
             class="button text-accent p-3 text-center uppercase tracking-[.25em] cursor-pointer">
           Добавить в корзину
         </div>
       </div>
      </div>

      <div class="text-left">

        <toggle-section title="Стоимость" v-model:is-unabled="toggleSectionEnabled">
          <div class="flex justify-center">
          <span v-if="!isRange(props.card.price)">
                  <p class="text-5xl text-price tracking-[.25em]">{{ props.card.price }}</p>
                </span>
            <span v-else class="flex justify-end gap-2 items-center">
                  <p class="text-price-sale tracking-[.15em]">{{ props.card.price[0] }}</p> / <p
                class="text-5xl text-price tracking-[.15em]">{{ props.card.price[1] }}</p>
                </span>
          </div>
        </toggle-section>

        <toggle-section title="Описание">
          <div v-for="infoCard in props.card.info" :key="infoCard.title" class="mb-5">
            <p
                class="text-3xl shadow-foreground shadow-2xs pb-2 text-center mb-5 rounded-2xl uppercase">
              {{ infoCard.title }} </p>
            <div v-for="infoCardData in infoCard.data" :key="infoCardData.title" class="mb-2">
              <p
                  class="inline font-bold">
                {{ infoCardData.title }}
              </p>
              <span>
              {{ infoCardData.description }}
            </span>
            </div>
          </div>
        </toggle-section>

        <toggle-section title="Презентация">
          <div v-for="present in props.card.presentation" :key="present.title">
            <div v-for="presentData in present.data" :key="presentData.title">
              <div v-if="presentData.title">
                <div class="flex">
                  <p class="bg-yellow-500 pr-5 mr-2 rounded-3xl border border-white"></p>
                  <span class="text-1xl ">
                    <i>{{ presentData.title }}</i>
                  </span>
                </div>
                <div class="text-2xl my-5 flex">
                  <p class="bg-green-500 pr-5 mr-2 rounded-3xl border border-white"></p>
                  <span>
                    {{ presentData.description }}</span>
                </div>
              </div>
              <div v-else>
                <span>В разработке...</span>
              </div>
            </div>
          </div>
        </toggle-section>

      </div>

    </div>
</template>

<script lang="ts" setup>

import {isRange} from "~~/server/utils/hooks/range.price";
import ToggleSection from "~/components/ui/ToggleSection.vue";
import {useBasketStore} from "~/store/basket.store";



const props = defineProps<{
  card: ICard
}>()

const basket = useBasketStore()

useSeoMeta({
  title: `${props.card.product}`
})

const toggleSectionEnabled = ref<boolean>(false)

</script>

<style scoped>

</style>
