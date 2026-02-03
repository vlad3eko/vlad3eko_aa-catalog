<template>
  <Dialog>
    <form>
      <DialogTrigger asChild>
        <slot/>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
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
        <div class="flex flex-col gap-2">
          <p>Способ доставки:</p>
          <div>
            <input v-model="form.delivery" type="radio" id="currier" name="deliveryVariant" value="Курьерская служба"
                   class="mr-2 cursor-pointer" checked/>
            <label for="currier" class="cursor-pointer">Курьерская служба</label>
          </div>
          <div class="mb-5">
            <input v-model="form.delivery" type="radio" id="takeSelf" name="deliveryVariant" value="Пункт самовывоза"
                   class="mr-2 cursor-pointer">
            <label for="takeSelf" class="cursor-pointer">Пункт самовывоза</label>
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
import {useBasketStore} from "~/store/basket.store";
import {Button} from "~/components/ui/button";
import {Input} from "~/components/ui/input";
import {useTemplateRef} from "vue";
import {useCheckoutStore} from "~/store/checkout.store";

const basketStore = useBasketStore()
const checkoutStore = useCheckoutStore()

const form = reactive({
  name: '',
  address: '',
  delivery: checkoutStore.checkout.delivery,
  date: new Date().toISOString()
})



</script>

<style scoped>

</style>
