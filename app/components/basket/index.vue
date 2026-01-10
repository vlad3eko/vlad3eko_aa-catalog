<template>
  <div class="animate-from-top">
    <Sheet>
      <SheetTrigger>
        <span
            :class="MATERIAL_ICON_CLASS_COLOR_TEXT"
            class="pt-1 cursor-pointer">shopping_cart</span>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader class="overflow-hidden">
          <SheetTitle>Корзина</SheetTitle>
          <SheetDescription>
            <div class="flex flex-col gap-3 h-[800px] pb-30 overflow-y-auto pr-4 bg-shell p-5">
              <div class="grid grid-cols-6 grid-rows-2  snap-center">
                <p class="bg-amber-300 row-span-2 col-span-2 h-[80px] mr-5 flex items-center justify-center">image</p>
                <div class="font-mono col-span-3">
                  <p class=" text-[12px] mt-[-4px] text-foreground">Очиститель воздуха</p>
                  <p class="text-[12px]">subtitle</p>
                </div>
                <span
                    :class="MATERIAL_ICON_CLASS_COLOR_TEXT"
                    class="col-start-6 text-right md-16">delete</span>
                <p class="col-start-3 self-end">price</p>
                <div class="col-start-5 col-span-2 flex items-end justify-end">
                  <div class="flex gap-2 items-center">
                    <span
                        :class="MATERIAL_ICON_CLASS_COLOR_TEXT"
                        class="cursor-pointer hover:bg-accent border-r pr-1 md-16"
                    >remove</span>
                    <p class="">20</p>
                    <span
                        :class="MATERIAL_ICON_CLASS_COLOR_TEXT"
                        class="cursor-pointer hover:bg-accent border-l pl-1 md-16"
                    >add</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="">

            </div>
          </SheetDescription>
        </SheetHeader>
        <sheet-footer>
          <sheet-title>
            <div class="flex justify-between text-[16px] mb-5">
              <p>Cумма заказа:</p>
              <p>100$</p>
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
import SheetOverlay from "~/components/ui/sheet/SheetOverlay.vue";
import {isRange} from "~~/server/utils/hooks/range.price";
import {MATERIAL_ICON_CLASS_COLOR_TEXT} from "~~/server/utils/classes/material-icon.shortcut";

const swiperRef = ref<any>(null)

const swiper = useSwiper(swiperRef, {
  effect: 'slide',
  loop: true,
})
</script>

<style scoped>


/*TODO animations variants*/
.animate-from-top {
  animation: from-top 1s none;
}

@keyframes from-top {
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
