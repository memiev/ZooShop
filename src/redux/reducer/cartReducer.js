import { addToCartActionType, removeFromCartActionType } from "../action-types";

const cartReducer = (state = [], action) => {
    if (action.type === addToCartActionType) {
        return [...state, action.payload];
    }

    if (action.type === removeFromCartActionType) {
        return state.filter((x) => x.id !== action.payload.id);  
    }

    return state;
};

export default cartReducer;
