<template>
  <div class="cursor-pointer flex flex-col justify-between">
    <NuxtLink :to="`/catalog/${props.card.id}`">
      <div class="flex justify-around m-1 font-bold text-2xl text-neutral-700">
        <span v-if="typeof props.card.price === 'number'">
          {{ props.card.price }} ₽
        </span>
        <span v-else>
          {{ props.card.price[0] }} - {{ props.card.price[1] }} ₽
        </span>
      </div>
      <div class="rounded-[4px]">
        <NuxtImg :src="props.card.img" class="h-[350px] object-cover mx-auto"/>
      </div>
      <div class="m-5">
        <p class="font-bold border-b border-b-gray-300 pb-2">
          {{ props.card.name }}
        </p>
        <span v-for="cardInfoTitle in props.card.info[0].data" class="text-[#707070]">
            {{ cardInfoTitle?.title }}
          </span>
      </div>

    </NuxtLink>

  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  card: ICard
}>()

</script>

<style scoped>

</style>
