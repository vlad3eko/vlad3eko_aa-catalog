import {useTelegramStore} from "~/store/telegram.store";

export default defineNuxtPlugin(() => {
    const telegramStore = useTelegramStore()

    const tg = (window as any).Telegram.WebApp

    if (tg) {
        tg.ready()
        const user = tg.initDataUnsafe?.user

        if (user) telegramStore.setUser(user)
    }
})
