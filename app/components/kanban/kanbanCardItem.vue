<template>
  <div class="flex">
    <div class="bg-background border rounded-2xl p-5 border-border">
      <div v-for="(title, key) in titlesOrders" :key="key"
           class="text-muted-foreground bg-panel p-2 border-border border mb-5 grid grid-cols-8 rounded-2xl">
        <div v-for="(value, key) in title" :key="key" class="flex justify-center">
          {{ value }}
          <span :class="MATERIAL_ICON_CLASS_COLOR_TEXT"
                class="rotate-90 md-16">
           switch_left
          </span>
        </div>
      </div>
      <div
          v-if="!ordersList.total"
          class="border-border border p-3">
        список заказов пуст...
      </div>
      <div v-else class=" rounded-b-2xl">
        <div
            v-for="order in ordersList.orders"
            class=" border-border border  mb-2 grid grid-cols-8">
          <p class="col-start-1 p-2 border-border border-r">{{ order.checkout.name }}</p>
          <p class="col-start-2 p-2 border-border border-r">{{ order.checkout.address }}</p>
          <div
              v-for="(item, itemIndex) in order.items" class="col-start-3 col-span-2">
            <div class="grid grid-cols-2">
              <p class="col-start-1 p-2 border-border border-r">{{ item.card.product }}\{{ item.quantity }}шт</p>
              <p v-if="isRange(item.card.price)" class="col-start-2 p-2 border-border border-r">{{ item.card.price[1] * item.quantity }}</p>
              <p v-else class="col-start-2 p-2 border-border border-r">{{item.card.price * item.quantity }}</p>
            </div>
          </div>
          <p class="col-start-5 p-2 border-border border-r">{{ order.checkout.date }}</p>
          <p class="col-start-6 p-2 border-border border-r">{{ order.checkout.delivery }}</p>
          <p class="col-start-7 p-2 border-border border-r">{{ }}</p>
          <p class="col-start-8 p-2 border-border">{{ formatDateIso(order.createdAt) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {MATERIAL_ICON_CLASS_COLOR_TEXT} from "~~/server/utils/classes/material-icon.shortcut";
import {titlesOrders} from "~~/server/utils/data.orders.card";
import {useOrdersStore} from "~/store/orders.store";
import {isRange} from "~~/server/utils/hooks/range.price";
import {formatDateIso} from "~~/server/utils/hooks/formatDate";

const ordersList = useOrdersStore()
console.log('orderL', ordersList)

</script>

<style scoped>

</style>
