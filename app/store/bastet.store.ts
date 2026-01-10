import {defineStore} from 'pinia'

export const useBasketStore = defineStore('basket', {
    state: () => ({
        items: [] as BasketItem[],
    }),

    getters: {
        totalPrice: (state) =>
            state.items.reduce((sum, item) => {
                const price = Array.isArray(item.card.price)
                    ? item.card.price[1]
                    : item.card.price

                return sum + price * item.quantity
            }, 0),
        count: (state) => {
            let total = 0
            state.items.forEach((count) => {
                total += count.quantity
            })
            if (!total) return
            return total
        }
    },

    actions: {
        add(card: ICard) {
            const existing = this.items.find(
                item => item.card.id === card.id
            )

            if (existing) {
                existing.quantity++
            } else {
                this.items.push({card, quantity: 1})
            }
        },

        remove(cardId: number) {
            this.items = this.items.filter(
                item => item.card.id !== cardId
            )
        },

        increment(cardId: number) {
            const item = this.items.find(i => i.card.id === cardId)

            if (item) item.quantity++
        },

        decrement(cardId: number) {
            const item = this.items.find(i => i.card.id === cardId)
            if (!item) return

            if (item.quantity === 1) {
                this.remove(cardId)
            } else {
                item.quantity--
            }
        },
    },
})
