import type {IOrder} from "~~/server/utils/orders.card.types";

export const useOrdersStore = defineStore('orders', {
    state: () => ({
        orders: [] as IOrder[]
    }),
    getters: {
        total: (state) => state.orders.length
    },
    actions: {
        add(order: any) {
            this.orders.push(order)
        }
    }
})
