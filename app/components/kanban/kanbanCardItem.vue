<template>
  <p class="col-start-1 col-span-2 p-2 border-border border-r">{{ order.checkout.name }}</p>
  <p class="col-start-3 col-span-3 p-2 border-border border-r">{{ order.checkout.address }}</p>
  <div v-for="(item, itemIndex) in order.items" class="col-start-6 col-span-2">
    <div class="grid grid-cols-2">
      <p class="col-start-1 p-2 border-border border-r">{{ item.card.product }}\{{ item.quantity }}шт</p>
      <p class="col-start-2 p-2 border-border border-r">{{ ordersList.totalPrice(item) }}</p>
    </div>
  </div>
  <p class="col-start-8 p-2 border-border border-r">{{ formatDateIso(order.checkout.date) }}</p>
  <p class="col-start-9 p-2 border-border border-r">{{ order.checkout.delivery }}</p>
  <p class="col-start-10 p-2 border-border border-r">{{ }}</p>
  <p class="col-start-11 p-2 border-border">{{ formatDateIso(order.createdAt) }}</p>
</template>

<script lang="ts" setup>

import {formatDateIso} from "~~/server/utils/hooks/formatDate";
import {useOrdersStore} from "~/store/orders.store";

defineProps(['order'])
const ordersList = useOrdersStore()

</script>

<style scoped>

</style>
