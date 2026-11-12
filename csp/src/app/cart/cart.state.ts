export interface CartState {
    items: string[],
    count: number
}

export const initialCartState: CartState = {
    items: [],
    count: 0
}

