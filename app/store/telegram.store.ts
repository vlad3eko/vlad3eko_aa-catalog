import {defineStore} from "pinia";
import type {ITelegramTypes} from "~~/server/utils/telegram/telegram.types";

export const useTelegramStore = defineStore('telegram', () => {
    const user = ref<any>(null)

    const setUser = (telegramUser: any) => {
        user.value = telegramUser
        console.log('telegramUser', telegramUser)
    }

    return {
        user,
        setUser
    }
})
