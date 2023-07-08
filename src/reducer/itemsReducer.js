import { AddProductCart, UpdateQuantityProductCart, DeleteProductCart } from "./itemsActions";

export const itemReducer = (state = [], action) => {

    switch (action.type) {
        case AddProductCart:
            return [
                ...state,
                {
                    product: action.payload,
                    quantity: 1,
                }
            ];
        case UpdateQuantityProductCart:
            return state.map((i) => {
                if (i.product.id === action.payload.id) {
                    return {
                        ...i,
                        quantity: i.quantity + 1
                    }
                    //i.quantity = i.quantity + 1;
                }
                return i;
            })
        case DeleteProductCart:
            return [
                ...state.filter((i) => i.product.id !== action.payload)
            ];
        default:
            break;
    }
}