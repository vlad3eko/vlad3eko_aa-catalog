import {defineStore} from 'pinia'
import type {IBasketItem} from "~~/server/utils/card.types";



export const useBasketStore = defineStore('basket', () => {
    const items = ref([] as IBasketItem[])

    const totalPrice = computed(() => {
        return items.value.reduce((sum, item) => {
            const price = Array.isArray(item.card.price)
                ? item.card.price[1]
                : item.card.price

            return sum + price * item.quantity
        }, 0)
    })

    const count = computed(() => {
        let total = 0
        items.value.forEach((count) => {
            total += count.quantity
        })

        if (!total) return
        return total
    })

    const isEmpty = computed(() => {
        return !!items.value.length
    })

    function add(card: ICard) {
        const existing = items.value.find(item =>
            item.card.id === card.id)

        if (existing) existing.quantity++
        else items.value.push({card, quantity: 1})
    }

    function removeCard(cardId: number) {
        items.value = items.value.filter(item => item.card.id !== cardId)
    }

    function increment(cardId: number) {
        const item = items.value.find(i => i.card.id === cardId)

        if (item) item.quantity++
    }

    function decrement(cardId: number) {
        const item = items.value.find(i => i.card.id === cardId)

        if (!item) return

        if (item.quantity === 1) removeCard(cardId)
        else item.quantity--
    }

    function clearStore() {
        items.value = []
    }

    return {
        items,
        totalPrice,
        count,
        isEmpty,
        add,
        increment,
        decrement,
        clearStore,
    }
})

