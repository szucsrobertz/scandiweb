import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item,size,colorSelected) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item,
    size: size,
    colorSelected:colorSelected
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

