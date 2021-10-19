import CurrenciesActionTypes from "./currencies.types";

const INITAIL_STATE = {
    hidden:true,
    currencies:[],
    baseCurrency: "USD"
};

const currencyReducer = (state = INITAIL_STATE,action) =>{
    switch(action.type){
        case CurrenciesActionTypes.TOGGLE_CURRENCY_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            }
        case CurrenciesActionTypes.GET_CURRENCIES:
            return {
                ...state,
                currencies:action.payload
            }
        case  CurrenciesActionTypes.CHANGE_BASE_CURRENCY:

            return {
                ...state,
                baseCurrency:action.payload
            }
        default:
            return state
    }
}

export default currencyReducer