<template>
  <div class="cursor-pointer h-full w-full rounded-2xl card flex flex-col justify-between">

    <NuxtLink :to="`/catalog/${props.card.id}`">
      <div class="rounded image-response animate-from-top">
        <NuxtImg :src="props.card.img" class="h-full object-cover mx-auto"/>
      </div>
      <div class="m-5">
        <div class="font-bold border-muted-bottom pb-2 mb-2 rounded">
          <div class="col-span-2 text-left text-2xl">
            {{ props.card.product }}
          </div>
          <div class="text-left ">
          <span v-if="!isRange(props.card.price)">
                  <p class="text-2xl text-price tracking-[.25em]">{{ props.card.price }}</p>
                </span>
            <span v-else class="flex justify-start gap-2 items-center">
                  <p class="text-price-sale tracking-[.15em]">{{ props.card.price[0] }}</p> / <p
                class="text-2xl text-price tracking-[.15em]">{{ props.card.price[1] }}</p>
                </span>
          </div>
        </div>
        <span v-for="cardInfoTitle in props.card?.info[0]?.data">
            <div class="text-left text-muted-foreground">
              {{ cardInfoTitle?.title }}
            </div>
          </span>
      </div>
    </NuxtLink>

    <div
        @click="basket.add(props.card)"
        class="button text-accent p-3 text-center uppercase tracking-[.25em] cursor-pointer">
      Добавить в корзину
    </div>
  </div>
</template>

<script lang="ts" setup>

import {isRange} from "~~/server/utils/hooks/range.price";
import {useBasketStore} from "~/store/basket.store";

const props = defineProps<{
  card: ICard
}>()

const basket = useBasketStore()

</script>
