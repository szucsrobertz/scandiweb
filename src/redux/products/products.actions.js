import ProductsActionTypes from './products.types'

export const getClothesProducts = item => ({
    type: ProductsActionTypes.GET_CLOTHES_PRODUCTS,
    payload: item
})

export const getTechProducts = item => ({
    type: ProductsActionTypes.GET_TECH_PRODUCTS,
    payload: item
})