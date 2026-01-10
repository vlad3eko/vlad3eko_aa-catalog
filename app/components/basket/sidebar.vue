<template>
  <div class="animate-from-top">
    <Sheet>
      <SheetTrigger>
        <div class="relative cursor-pointer">
          <span
              :class="MATERIAL_ICON_CLASS_COLOR_TEXT"
              class="pt-1">shopping_cart</span>
          <span v-if="!basket.count"></span>
          <span
              v-else
              class="flex justify-center items-center absolute top-0 left-5 rounded-2xl w-6 px-1 pb-0.5 text-[12px] button">{{
              basket.count
            }}</span>
        </div>
      </SheetTrigger>
      <SheetContent class="animate-from-right">
        <SheetHeader class="overflow-hidden">
          <SheetTitle>Корзина</SheetTitle>
          <SheetDescription>
            <div class="flex flex-col gap-3 h-[800px] overflow-y-auto pr-4 bg-shell p-5">
              <div
                  v-for="item in basket.items"
                  :key="item.card.id"
                  class="grid grid-cols-6 grid-rows-2 snap-center"
              >
                <NuxtImg
                    :src="item.card.img"
                    class="row-span-2 col-span-2 h-[80px]"
                />

                <div class="font-mono col-span-3">
                  <p class="text-[12px] text-accent-foreground">{{ item.card.name }}</p>
                  <p class="text-[12px]">{{ item.card.category }}</p>
                </div>

                <span
                    :class="MATERIAL_ICON_CLASS_COLOR_TEXT"
                    class="col-start-6 text-right cursor-pointer"
                    @click="basket.remove(item.card.id)"
                >
                 delete
                </span>

                <div class="flex items-end">
                 <span v-if="!isRange(item.card.price)">
                  <p class="text-price tracking-[.25em]">{{ item.card.price }}</p>
                </span>
                  <p
                      v-else
                      class=" text-price tracking-[.15em]">{{ item.card.price[1] }}</p>
                </div>

                <div class="col-start-5 col-span-2 flex justify-end items-end gap-2">
                  <div class="flex items-center gap-5">
                    <span
                        @click="basket.decrement(item.card.id)"
                        :class="MATERIAL_ICON_CLASS_COLOR_TEXT"
                        class="cursor-pointer border-r hover:bg-accent"
                    >remove</span>
                    <p>{{ item.quantity }}</p>
                    <span
                        @click="basket.increment(item.card.id)"
                        :class="MATERIAL_ICON_CLASS_COLOR_TEXT"
                        class="cursor-pointer border-l hover:bg-accent"
                    >add</span>
                  </div>
                </div>
              </div>

            </div>
          </SheetDescription>
        </SheetHeader>
        <sheet-footer>
          <sheet-title>
            <div class="flex justify-between text-[16px] mb-5">
              <p>Сумма заказа:</p>
              <p>{{ basket.totalPrice }} ₽</p>
            </div>
          </sheet-title>
          <sheet-description>
            <div class="button text-accent p-3 text-center uppercase tracking-[.25em] cursor-pointer">
              Оформить заказ
            </div>
          </sheet-description>
        </sheet-footer>
      </SheetContent>
    </Sheet>
  </div>
</template>

<script lang="ts" setup>
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {SheetFooter} from "~/components/ui/sheet";
import {MATERIAL_ICON_CLASS_COLOR_TEXT} from "~~/server/utils/classes/material-icon.shortcut";
import {useBasketStore} from "~/store/bastet.store";
import {isRange} from "~~/server/utils/hooks/range.price";

const basket = useBasketStore()

console.log('basket.items', basket.items)

</script>
