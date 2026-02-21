import {defineStore} from "pinia";
import {useBasketStore} from "~/store/basket.store";
import {useCheckoutStore} from "~/store/checkout.store";

export const useModalStore = defineStore('modal', () => {
    const message = ref<string>('')
    const description = ref<string>('')
    const cancel = ref<string>('')
    const cancelShow = ref<boolean>(true)
    const next = ref<string>('')
    const isOpen = ref<boolean>(false)
    const linkTo = ref<string>('')

    function setMessage(
        setMessage: string = 'это заголовок',
        setDescription: string = 'это описание',
        link: string = '',
        showCancel: boolean = true,
        setCancel:string = 'Отмена',
        setNext: string = 'Ок')
        : void {
        message.value = setMessage
        description.value = setDescription
        linkTo.value = link
        cancelShow.value = showCancel
        cancel.value = setCancel
        next.value = setNext

        const basketStore = useBasketStore()
        const checkoutStore = useCheckoutStore()

        basketStore.isOpen = false
        checkoutStore.isOpen = false
        isOpen.value = true
    }

    return {
        message,
        description,
        cancel,
        cancelShow,
        next,
        isOpen,
        linkTo,
        setMessage,
    }
})
