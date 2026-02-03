import type {ICheckout} from "~~/server/utils/checkout.types";
import {useBasketStore} from "~/store/basket.store";
import {useOrdersStore} from "~/store/orders.store";
import {defineStore} from "pinia";


export const useCheckoutStore = defineStore('checkout', () => {
    const checkout = ref({
        name: '',
        address: '',
        delivery: 'Курьерская служба',
        date: ''
    } as ICheckout)

    function createOrder(date: ICheckout) {
        checkout.value = date

        const basketStore = useBasketStore()
        const ordersStore = useOrdersStore()

        if (!basketStore.items.length) return
        else ordersStore.createOrder({
            items: basketStore.items,
            checkout: checkout.value,
            createdAt: new Date().toISOString()
        })

        basketStore.clearStore()
    }

    return {
        checkout,
        createOrder
    }
})
