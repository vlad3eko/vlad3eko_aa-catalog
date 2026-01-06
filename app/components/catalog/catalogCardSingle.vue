<template>
  <div class="cursor-pointer h-full bg-card hover:bg-accent rounded-2xl">
    <NuxtLink :to="`/catalog/${props.card.id}`">
        <div class="text-3xl py-5 text-price italic">
          <span v-if="!isRange(props.card.price)">
                  {{ props.card.price }}
                </span>
          <span v-else>
                  {{ props.card.price[0] }} - {{ props.card.price[1] }}
                </span>
        </div>
      <div class="rounded">
        <NuxtImg :src="props.card.img" class="h-[350px] object-cover mx-auto"/>
      </div>
      <div class="m-5">
        <p class="font-bold border-muted-bottom pb-2 mb-2 rounded text-primary">
          {{ props.card.name }}
        </p>
        <span v-for="cardInfoTitle in props.card?.info[0]?.data">
            {{ cardInfoTitle?.title }}
          </span>
      </div>

    </NuxtLink>

  </div>
</template>

<script lang="ts" setup>

import {isRange} from "~~/server/utils/hooks/range.price";

const props = defineProps<{
  card: ICard
}>()

</script>

<style scoped>

</style>
