import type {IOrder} from "~~/server/utils/orders.card.types";
import {defineStore} from "pinia";


export const useOrdersStore = defineStore('orders', () => {
    const orders = ref([] as IOrder[])

    const total = computed(() => {
        return orders.value.length
    })

    function createOrder(order: IOrder) {
        orders.value.push(order)
    }

    return {
        orders,
        total,
        createOrder
    }
})
