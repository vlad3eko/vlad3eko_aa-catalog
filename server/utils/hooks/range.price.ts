export const isRange = (price: number | [number, number]): price is [number, number] => {
    return Array.isArray(price)
}
