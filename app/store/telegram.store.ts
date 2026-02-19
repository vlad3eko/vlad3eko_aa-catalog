import {defineStore} from "pinia";
import type {ITelegramTypes} from "~~/server/utils/telegram/telegram.types";

export const useTelegramStore = defineStore('telegram', () => {
    const user = ref<any>({
            id: 845611,
            first_name: "Владислав",
            last_name: "Мазаев",
            username: "vlad3eko",
            photo_url: "https://t.me/i/userpic/320/QxFjFXL2ezATNOY7K4LhJlCl7NBsSiCJjuU5BXZIjXM.svg"
        })


    const setUser = (telegramUser: any) => {
        user.value = telegramUser
        console.log('telegramUser', telegramUser)
    }

    return {
        user,
        setUser
    }
})
