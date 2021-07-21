import { addToCartActionType, removeFromCartActionType } from "../action-types";

export const addToCart = (item) => {
    return (dispatch) => {
        dispatch({
            type: addToCartActionType,
            payload: item,
        });
    };
};

export const removeFromCart = (item) => {
    return (dispatch) => {
        dispatch({
            type: removeFromCartActionType,
            payload: item,
        });
    };
};
