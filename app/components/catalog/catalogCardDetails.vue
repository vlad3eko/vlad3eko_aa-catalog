<template>
    <h1 class="p-2 sticky text-3xl font-bold text-primary bg-shell z-1 uppercase rounded-2xl top-13  select-text shadow-xl">
      {{ props.card.name }}</h1>
    <div class="grid grid-cols-2">
      <div class="self-start sticky top-0 scale-x-75 scale-y-75">
        <NuxtImg :src="props.card.img" :alt="props.card.name"/>
      </div>

      <div class="text-left">

        <toggle-section title="Стоимость" v-model:is-unabled="toggleSectionEnabled">
          <div class="font-bold text-center mb-5 mt-5 tracking-widest text-4xl text-price">
          <span v-if="!isRange(props.card.price)">
                  {{ props.card.price }}
                </span>
          <span v-else>
                  {{ props.card.price[0] }} - {{ props.card.price[1] }}
                </span>
          ₽
          </div>
        </toggle-section>

        <toggle-section title="Описание">
          <div v-for="infoCard in props.card.info" class="mb-5">
            <p
                class="text-3xl shadow-foreground shadow-2xs pb-2 text-center mb-5 rounded-2xl uppercase">
              {{ infoCard.title }} </p>
            <div v-for="infoCardData in infoCard.data" class="mb-2">
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
          <div v-for="present in props.card.presentation">
            <div v-for="presentData in present.data">
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

import ToggleSection from "~/components/ui/ToggleSection.vue";
import {isRange} from "~~/server/utils/hooks/range.price";

const props = defineProps<{
  card: ICard
}>()

const toggleSectionEnabled = ref<boolean>(false)

</script>

<style scoped>

</style>
