<template>
  <div class="flex">
    <div class="bg-background border rounded-2xl p-5 border-border">
        <div v-for="(title, key) in titlesOrders" :key="key"
             class="text-muted-foreground bg-panel p-2 border-border border-t border-l border-r grid grid-cols-8 rounded-t-2xl">
          <div v-for="(value, key) in title" :key="key" class="p-2 mr-2 flex rounded-l rounded-r">
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
        <div
            v-else
            v-for="ordersList in ordersList.orders"
            class="border-border border p-2 rounded-b-2xl">
          <div v-for="(order, key) in ordersList" :key="key" class="grid grid-cols-8 border-b border-accent rounded-b-2xl">
            <p class="col-start-1 p-2 ">{{ order?.card.name }}</p>
            <p class="col-start-2 p-2 ">{{ order?.card.address }}</p>
            <p class="col-start-3 p-2 ">{{ order?.card.product }}</p>
            <p class="col-start-4 p-2 ">{{ order?.card.price }}</p>
            <p class="col-start-5 p-2 ">{{ order?.card.date }}</p>
            <p class="col-start-6 p-2 ">{{ order?.card.delivery }}</p>
            <p class="col-start-7 p-2 ">{{ order?.card.manager }}</p>
            <p class="col-start-8 p-2 ">{{ order?.card.$createdAt }}</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {MATERIAL_ICON_CLASS_COLOR_TEXT} from "~~/server/utils/classes/material-icon.shortcut";
import {titlesOrders} from "~~/server/utils/data.orders.card";
import {useOrdersStore} from "~/store/orders.store";

const ordersList = useOrdersStore()
console.log('oL', ordersList.orders)

</script>

<style scoped>

</style>
