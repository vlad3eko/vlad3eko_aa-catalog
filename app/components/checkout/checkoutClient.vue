<template>
  <Dialog class="">
    <form class="animate-from-right">
      <DialogTrigger asChild>
        <slot/>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px] unselectable animate-from-right">
        <DialogHeader>
          <DialogTitle>Дополнительная информация</DialogTitle>
          <DialogDescription>
            ФИО и адрес клиента, дата и способ доставки
          </DialogDescription>
        </DialogHeader>
        <Input v-model="form.name" id="name" name="name" defaultValue="" placeholder="ФИО"
               class="border-accent border p-2" autofocus/>
        <Input v-model="form.address" id="address" name="address" defaultValue="" placeholder="Адрес"
               class="border-accent border p-2"/>
        <div class="flex gap-10">
          <div>
            <DialogTitle>Способ доставки:</DialogTitle>
            <DialogDescription>
              <input v-model="form.delivery" type="radio" id="currier" name="deliveryVariant" value="Курьер"
                     class="mr-2 cursor-pointer" checked/>
              <label for="currier" class="cursor-pointer">Курьерская служба</label>
            </DialogDescription>
            <DialogDescription class="mb-5">
              <input v-model="form.delivery" type="radio" id="takeSelf" name="deliveryVariant" value="ПВЗ"
                     class="mr-2 cursor-pointer">
               <label for="takeSelf" class="cursor-pointer">Пункт самовывоза</label>
            </DialogDescription>
          </div>
          <div>
            <div class="flex gap-2">
              <DialogTitle>Дата доставки:</DialogTitle>
              <input v-model="form.date"
                     type="date"
                     :min="dateToday"
                     class="mr-2 cursor-pointer">
            </div>
            <DialogDescription>
            <input type="checkbox" id="soonAsPossible" name="soonAsPossible" value="Ближайшая"
                   class="mr-2 cursor-pointer" checked>
             <label for="soonAsPossible" class="cursor-pointer">Ближайшая</label>
            </DialogDescription>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Отмена</Button>
          </DialogClose>
          <Button
              @click="checkoutStore.createOrder(form)"
              type="submit">Подтвердить заказ
          </Button>
        </DialogFooter>
      </DialogContent>
    </form>
  </Dialog>
</template>

<script lang="ts" setup>
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import {Button} from "~/components/ui/button";
import {Input} from "~/components/ui/input";
import {useCheckoutStore} from "~/store/checkout.store";

const checkoutStore = useCheckoutStore()

const dateToday = computed(() => {
  const date = new Date()

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = String(date.getFullYear())

  return `${year}-${month}-${day}`
})

const form = reactive({
  name: '',
  address: '',
  delivery: checkoutStore.checkout.delivery,
  date: checkoutStore.checkout.date
})

</script>

<style scoped>

</style>
