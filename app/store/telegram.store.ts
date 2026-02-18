import type {Pinia} from "pinia";

export const useTelegramStore = defineStore('telegram', () => {
    const user = ref<any>(null)

    const setUser = (telegramUser: any) => {
        user.value = telegramUser
    }

    return {
        user,
        setUser
    }
})
