export interface ICardDescriptionItem {
    title?: string
    description?: string
}

export enum CardDescription {
    Short = "short",
    Full = "full"
}

export interface ICardDescription {
    type: CardDescription
    title?: string
    data: ICardDescriptionItem[]
}

export interface ICard {
    id: number
    product: string
    price: number | [number, number]
    img: string
    category: string
    info: ICardDescription[]
    presentation: ICardDescription[]
}


export interface BasketItem {
    card: ICard,
    quantity: number
}
