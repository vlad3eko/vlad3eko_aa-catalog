export interface IOrder {
    id: string
    name: string
    address: string
    product: string
    price: number
    date: string
    delivery: string
    manager?: string
    createdAt?: number
}
