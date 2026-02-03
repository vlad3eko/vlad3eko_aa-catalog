import type {IOrder} from "~~/server/utils/orders.card.types";
import {defineStore} from "pinia";

export const useOrdersStore = defineStore('orders', () => {
    const orders = ref([] as IOrder[])

    const isEmpty = computed(() => {
        return orders.value.length
    })

    const totalPrice = (item: any) => {
       const price = Array.isArray(item.card.price)
           ? item.card.price[1]
           : item.card.price

        return price * item.quantity
    }

    function createOrder(order: IOrder) {
        orders.value.push(order)
    }

    return {
        orders,
        isEmpty,
        totalPrice,
        createOrder
    }
})
