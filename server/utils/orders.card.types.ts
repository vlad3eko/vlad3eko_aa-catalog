import {ICheckout} from "~~/server/utils/checkout.types";
import {IBasketItem} from "~~/server/utils/card.types";

export interface IOrder {
    items: IBasketItem[]
    checkout: ICheckout
    createdAt: string
}
