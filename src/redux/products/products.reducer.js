import ProductsActionTypes from "./products.types";

const INITAIL_STATE = {
    clothesProducts:[],
    techProducts: []
}

const productsReducer = (state = INITAIL_STATE,action) => {
    switch(action.type){
        
        case  ProductsActionTypes.GET_CLOTHES_PRODUCTS:
            return {
                ...state,
                clothesProducts:action.payload
            }
        case  ProductsActionTypes.GET_TECH_PRODUCTS:
                return {
                    ...state,
                    techProducts:action.payload
                }
        default:
            return state
    }

}

export default productsReducer