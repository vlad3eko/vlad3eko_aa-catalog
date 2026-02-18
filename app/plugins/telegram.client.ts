import {useTelegramStore} from "~/store/telegram.store";

export default defineNuxtPlugin(() => {
    const telegramStore = useTelegramStore()
    console.log('telegramStore', telegramStore)

    const tg = window?.Telegram.WebApp
    console.log('tg', tg)

    if (tg) {
        tg.ready()
        const user = tg.initDataUnsafe?.user
        console.log('user', user)

        if (user) telegramStore.setUser(user)
    }
})
