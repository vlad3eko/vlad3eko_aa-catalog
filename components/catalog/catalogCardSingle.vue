<template>
      <div class="cursor-pointer">
        <div class="overflow-hidden rounded-[4px]">
          <NuxtImg :src="card.img" class="h-[450px] object-cover w-full"/>
        </div>
        <div class="m-5">
          <p>
            {{ card.name }}
          </p>
          <p class="text-[#c4c4c4]">
            {{ card.description }}
          </p>
          <div class="flex justify-around m-1">
            <p>
              {{ card.price }} ₽
            </p>
            <p>
              <span class="material-icons p-1 bg-[#12777E] text-white cursor-pointer">add</span>
            </p>
          </div>
        </div>
      </div>
</template>

<script setup>

defineProps(['card'])

</script>

<style scoped>

</style>
