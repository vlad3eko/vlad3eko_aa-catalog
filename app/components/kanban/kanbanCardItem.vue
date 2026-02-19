<template>
  <p class="col-span-3 p-2 border-border border-r cut-text dot-text">{{ order.checkout.name }}</p>
  <p class="col-span-4 p-2 border-border border-r cut-text dot-text">{{ order.checkout.address }}</p>
  <div class="col-start-8 col-span-6">
    <div class="grid grid-cols-6">
      <p class="col-span-5 p-2 border-border border-r dot-text">{{ productText }}</p>
      <p class="col-span-1 p-2 border-border border-r">{{ productPrice }}</p>
    </div>
  </div>
  <p class="p-2 border-border border-r">{{ formatDate }}</p>
  <p class="p-2 border-border border-r">{{ order.checkout.delivery }}</p>
  <p class="p-2 border-border border-r">{{ telegramStore?.user.first_name }}</p>
  <p class="p-2 border-border">{{ formatDateIso(order.createdAt) }}</p>
</template>

<script lang="ts" setup>

import {formatDateIso} from "~~/server/utils/hooks/formatDate";
import {useOrdersStore} from "~/store/orders.store";
import {useTelegramStore} from "~/store/telegram.store";

const props = defineProps<{order: IOrder}>()
const ordersStore = useOrdersStore()
const telegramStore = useTelegramStore()

const productText = computed(() =>
    props.order.items
        .map(i => `${i.card.product}/${i.quantity}шт`)
        .join(', ')
)

const formatDate = computed(() => {
  const date = props.order.checkout.date

  if (date !== 'Ближайшая') {
    return formatDateIso(date)
  }

  return date
})

const productPrice = computed(() =>
    ordersStore.calcOrderTotal(props.order)
)
</script>

<style scoped>

</style>
