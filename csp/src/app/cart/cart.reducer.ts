import { createReducer, on } from "@ngrx/store";
import { initialCartState } from "./cart.state";
import { addToCart } from "./cart.action";

export const cartReducer = createReducer(
    initialCartState,
    on(addToCart, (state, { product }) => ({
        ...state,
        items: [...state.items, product],
        count: state.count + 1
    }))
)