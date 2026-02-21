import type {ICheckout} from "~~/server/utils/checkout.types";
import {useBasketStore} from "~/store/basket.store";
import {useOrdersStore} from "~/store/orders.store";
import {defineStore} from "pinia";


export const useCheckoutStore = defineStore('checkout', () => {
    const checkout = ref({
        name: '',
        address: '',
        delivery: 'Курьер',
        date: 'Ближайшая'
    } as ICheckout)
    const isOpen = ref<boolean>(false)

    function createOrder(date: ICheckout) {
        checkout.value = date

        const basketStore = useBasketStore()
        const ordersStore = useOrdersStore()

        const unSuccess = !(!basketStore.items.length || checkout.value.name && checkout.value.address)
        if (unSuccess) return false

        else ordersStore.createOrder({
            items: [...basketStore.items],
            checkout: checkout.value,
            createdAt: new Date().toISOString()
        })
        basketStore.clearStore()
        clearStore()

        return true
    }

    function clearStore() {
        checkout.value = {
            name: '',
            address: '',
            delivery: 'Курьер',
            date: 'Ближайшая'
        }
    }

    return {
        checkout,
        isOpen,
        createOrder
    }
})
