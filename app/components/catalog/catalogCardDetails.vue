<template>
  <div class="mt-5">
    <h1 class="pt-4 sticky text-4xl font-bold border-b mb-5 pb-5 border-b-gray-300 theme-panels uppercase  top-15 select-text">
      {{ props.card.name }}</h1>
    <div class="grid grid-cols-2">
      <div class="self-start sticky top-20 z-999 scale-x-75 scale-y-75">
        <NuxtImg :src="props.card.img" :alt="props.card.name"/>
      </div>



      <!--   контент страницы   -->

      <div class="text-left">

        <ui-toggle-section title="Стоимость" v-model:is-unabled="toggleSectionEnabled">
          <p class="font-bold text-center mb-5 mt-5 tracking-widest text-4xl">{{ props.card.price }} ₽</p>
        </ui-toggle-section>

        <ui-toggle-section title="Описание">
          <div v-for="infoCard in props.card.info" class="mb-5">
            <p
                class="text-3xl font-bold text-center mb-5 theme-titles rounded-2xl uppercase">
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
        </ui-toggle-section>

        <ui-toggle-section title="Презентация">
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
        </ui-toggle-section>
        <span
            class="text-[#c4c4c4] block text-3xl text-center uppercase border-b pb-5 mt-5">Стоимость: </span>

        <!--   Логика showDescription Описание  -->
        <!--   Логика showDescription контент Описание -->



        <div class="relative">
          <span
              @click="showDescription = !showDescription"
              class="text-[#c4c4c4] block text-3xl text-center uppercase border-b pb-5 mt-5 cursor-pointer">Описание</span>
          <div class="absolute top-3 right-0">
            <span v-if="!showDescription" class="material-symbols-outlined theme-text">visibility_off</span>
            <span v-else class="material-symbols-outlined theme-text">visibility</span>
          </div>

          <div v-if="showDescription">
            <div v-for="infoCard in props.card.info" class="mb-5">
              <p
                  class="text-3xl font-bold text-center mb-5 theme-titles rounded-2xl uppercase">
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
          </div>
        </div>

        <!--   Логика showDescription Презентация -->
        <!--   Логика showDescription контент Презентация -->


        <div class="relative">
          <span @click="showPresentation = !showPresentation"
                class="text-[#c4c4c4] block text-3xl text-center uppercase border-b pb-5 mt-5 cursor-pointer">
            Презентация
          </span>
          <div class="absolute top-3 right-0">
            <span v-if="!showPresentation" class="material-symbols-outlined theme-text">visibility_off</span>
            <span v-else class="material-symbols-outlined theme-text">visibility</span>
          </div>


          <div v-show="showPresentation" class="mt-5">
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
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import UiToggleSection from "~/components/ui/UiToggleSection.vue";

const props = defineProps<{
  card: ICard
}>()

const toggleSectionEnabled = ref<boolean>(false)
const showDescription = ref<boolean>(true)
const showPresentation = ref<boolean>(true)

</script>

<style scoped>

</style>
