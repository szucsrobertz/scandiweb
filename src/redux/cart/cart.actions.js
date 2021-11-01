import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item,size,colorSelected,capacity,usb,touchId) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item,
    size: size,
    colorSelected:colorSelected,
    capacity:capacity,
    usb:usb,
    touchId:touchId
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

